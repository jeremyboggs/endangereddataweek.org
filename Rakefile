require 'active_support'
require 'google_drive'
require 'dotenv/tasks'
require 'dotenv'
require 'colorize'
require 'chronic'
require 'geocoder'
require 'html-proofer'
require 'ra11y'

# system requirements
require 'csv'
require 'date'
require 'erb'
require 'json'

Dotenv.load

# task default: 'import:events'
task default: 'import:all'

desc 'Clean _events directory'
task :clean do
  FileUtils.rm_f Dir.glob('_events/*')
end

namespace :import do
  desc 'Import events for the collection, map, and datatable'
  task :all => [:events, :data, :map]

  desc 'Import Events from the Google Spreadsheet'
  task :events do
    login
    (2..@ws.num_rows).each do |row|
      @event = event_hash(row)
      contents = render_erb('templates/event.html.erb')
      file_path = @event[:file_path]
      write_file(file_path, contents)
      puts "Writing the event for '#{@event[:title]}'".green
    end
  end

  desc 'Generate JSON for dynatable plugin'
  task data: :dotenv do
    login
    system('clear')
    @events = []

    (2..@ws.num_rows).each do |row|
      @event = {
        date: Chronic.parse(@ws[row, @headers[:date]]).strftime('%Y-%m-%d'),
        location: @ws[row, @headers[:institution]],
        title: @ws[row, @headers[:title_of_your_event]]
      }

      @event.merge!(file_path: filename(@event))
      @event.merge!(web_path: filename(@event).gsub('_event', '/event').gsub('.md', '/'))

      if(@ws[row, @headers[:virtual_event]].length > 0)
        @event[:location] = "<i class='fa fa-globe orange'></i> #{@ws[row, @headers[:institution]]}"
      end
      @event.merge!(link: link_title(@event))
      @events << @event
      puts "Writing events for table view'".green
      File.open('data/events_table.json', 'w'){ |f| f.write(@events.to_json) }
    end
  end

  def link_title(event)
    "<a href='#{event[:web_path]}'>#{event[:title]}</a>"
  end

  def shorten(string, count)
    string.match(/^.{0,#{count}}\b/)[0] + "..."
  end

  def set_headers
    @headers ||= {}
    login
    counter = 1
    (1..@ws.num_cols).each do |col|
      @headers[@ws[1,col].gsub(/\s+/, '_').downcase.to_sym] = counter
      counter +=1
    end

    @headers
  end

  # for testing
  task :set_headers do
    puts set_headers
  end

  def event_hash(row)
    @headers ||= set_headers
    event = {
      id: row,
      title:          @ws[row, @headers[:title_of_your_event]],
      date:           Chronic.parse(@ws[row, @headers[:date]]).strftime('%Y-%m-%d'),
      institution:    @ws[row, @headers[:institution]],
      location:       @ws[row, @headers[:location_]],
      contact:        @ws[row, @headers[:contact_person]],
      time:           @ws[row, @headers[:time]],
      description:    @ws[row, @headers[:event_description]],
      excerpt:        shorten(@ws[row, @headers[:event_description]], 140),
      contact_person: @ws[row, @headers[:contact_person]],
      email:          @ws[row, @headers[:contact_email]],
      website:        @ws[row, @headers[:event_website]],
      latitude:       @ws[row, @headers[:latitude]],
      longitude:      @ws[row, @headers[:longitude]],
      virtual:        @ws[row, @headers[:virtual_event]],
      audio_url:      @ws[row, @headers[:audio_url]],
      video_url:      @ws[row, @headers[:video_url]],
    }
    event.merge!(file_path: filename(event))
    event.merge!(web_path: filename(event).gsub('_event', '/event').gsub('.md', '/'))
    event.merge!(link: link_title(event))
  end

  desc 'Generate GeoJSON from Google Spreadsheet'
  task map: :dotenv do
    login
    system('clear')
    @features = []

    (2..@ws.num_rows).each do |row|
      feature = event_hash(row)

      # check if a location has been created
      if (feature[:longitude] == '' || feature[:latitude] == '') && @ws[row, @headers[:geocode]].length != 0
        address = "#{@ws[row, @headers[:institution]]}, #{@ws[row, @headers[:location_]]}"
        puts "Looking up #{address}".yellow
        result = geocode(address)
        @ws[row, @headers[:latitude]]  = result[:lat]
        @ws[row, @headers[:longitude]] = result[:lon]
        @ws.save
        feature[:longitude] = result[:lon]
        feature[:latitude] = result[:lat]
      else
        puts "\tUsing cached location: (#{feature[:longitude]},#{feature[:latitude]}) for #{feature[:title]}".green
      end

      puts "Adding #{feature[:title]}".yellow

      @features << feature unless feature[:latitude].to_s.length == 0
    end

    puts 'Rendering JavaScript map data'.green
    contents = render_erb('templates/events.js.erb')
    write_file('./data/events_map.js', contents)
  end
end

namespace :test do
  desc 'Generate test map data'
  task :map do
    system('clear')
    login

    puts "Generating test data".green
    puts "Make sure you replace this data with the real data before pushing!!!".red

      @features = []

      counter = 1000

      (2..@ws.num_rows).each do |row|
        feature = event_hash(row)

        (1..10).each do |test|
          feature[:id] = counter # fake the id
          puts "Adding #{feature[:title]}".yellow
          @features << feature
          counter +=1
        end
      end

      puts 'Rendering JavaScript map data'.green
      contents = render_erb('templates/events.js.erb')
      write_file('./data/events_map.js', contents)

  end
  desc 'Validate HTML output'
  task :html do
    sh "bundle exec jekyll build"
    options = { :assume_extension => true }
    HTMLProofer.check_directory("./_site", options).run
  end

  desc 'Validate site with pa11y'
  task :accessibility do
    sh "bundle exec jekyll build"
    Ra11y::Site.new("./_site").run
  end
end

def filename(event)
  formatted_date = Chronic.parse(event[:date]).strftime('%Y-%m-%d')
  event_name = event[:title].split(%r{ |!|/|\?|\#|\)|\(|:|&|-|$|,|"|"}).map do |i|
    i.downcase if i != ''
  end.compact.join('-')
  "_events/#{formatted_date}-#{event_name}.md"
end

def render_erb(template_path)
  template = File.open(template_path, 'r').read
  erb = ERB.new(template)
  erb.result(binding)
end

# Login to Google with a saved session and set spreadsheet
def login
  system('clear')
  puts 'Authorizing...'.green

  @session ||= GoogleDrive.saved_session('config.json')
  @ws ||= @session.spreadsheet_by_key(ENV['SPREADSHEET_KEY']).worksheets[0]
end

def spreadsheet
  @ws ||= @session.spreadsheet_by_key(ENV['SPREADSHEET_KEY'])
end

def write_file(path, contents)
  file = File.open(path, 'w')
  file.write(contents)
rescue IOError => error
  puts 'File not writable. Check your permissions'
  puts error.inspect
ensure
  file.close unless file.nil?
end

def geocode(address)
  result = Geocoder.search(address).first
  if result
    {
      lat: result.latitude,
      lon: result.longitude
    }
  else
    {}
  end
end
