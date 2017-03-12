!function(){"use strict";var e=[" _____   _       _______","(____ \\ | |     (_______)"," _   \\ \\| |      _____","| |   | | |     |  ___)","| |__/ /| |_____| |","|_____/ |_______)_|"].join("\n");console.log(e)}(),function(){function e(e,t){var a="";e.properties&&e.properties.popupContent&&(a+=e.properties.popupContent),t.bindPopup(a)}var t=L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',subdomains:"abcd",maxZoom:19}),a=L.tileLayer("https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=ed8a8c98442949588501489e7f836831",{attribution:'&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),o=L.map("map",{center:[39.73,-104.99],zoom:4,layers:[t,a]}),r={Positron:t,Landscape:a};L.control.layers(r).addTo(o);var n=L.markerClusterGroup(),_=new OverlappingMarkerSpiderfier(o),p=new L.Popup;_.addListener("click",function(e){p.setContent(e.desc),p.setLatLng(e.getLatLng()),o.openPopup(p)}),_.addListener("spiderfy",function(e){o.closePopup()});var s=L.geoJson(events,{onEachFeature:e,pointToLayer:function(e,t){return L.marker(t)}});n.addLayer(s),o.addLayer(n)}(),function(){"use strict";$.ajax({url:"/data/events_table.json",success:function(e){$("#event_table").dynatable({dataset:{records:e,sorts:{date:1}}})}})}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsiZGxmIiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJvbkVhY2hGZWF0dXJlIiwiZmVhdHVyZSIsImxheWVyIiwicG9wdXBDb250ZW50IiwicHJvcGVydGllcyIsImJpbmRQb3B1cCIsIkNhcnRvREJfUG9zaXRyb24iLCJMIiwidGlsZUxheWVyIiwiYXR0cmlidXRpb24iLCJzdWJkb21haW5zIiwibWF4Wm9vbSIsIlRodW5kZXJmb3Jlc3RfTGFuZHNjYXBlIiwibWFwIiwiY2VudGVyIiwiem9vbSIsImxheWVycyIsImJhc2VNYXBzIiwiUG9zaXRyb24iLCJMYW5kc2NhcGUiLCJjb250cm9sIiwiYWRkVG8iLCJtYXJrZXJzIiwibWFya2VyQ2x1c3Rlckdyb3VwIiwib21zIiwiT3ZlcmxhcHBpbmdNYXJrZXJTcGlkZXJmaWVyIiwicG9wdXAiLCJQb3B1cCIsImFkZExpc3RlbmVyIiwibWFya2VyIiwic2V0Q29udGVudCIsImRlc2MiLCJzZXRMYXRMbmciLCJnZXRMYXRMbmciLCJvcGVuUG9wdXAiLCJjbG9zZVBvcHVwIiwiZ2VvSnNvbkxheWVyIiwiZ2VvSnNvbiIsImV2ZW50cyIsInBvaW50VG9MYXllciIsImxhdGxuZyIsImFkZExheWVyIiwiJCIsImFqYXgiLCJ1cmwiLCJzdWNjZXNzIiwiZGF0YSIsImR5bmF0YWJsZSIsImRhdGFzZXQiLCJyZWNvcmRzIiwic29ydHMiLCJkYXRlIl0sIm1hcHBpbmdzIjoiQ0FBQSxXQUNFLFlBRUEsSUFBSUEsSUFDRiwyQkFDQSw2QkFDQSwyQkFDQSwwQkFDQSxzQkFDQSx1QkFDQUMsS0FBSyxLQUVQQyxTQUFRQyxJQUFJSCxNQUdkLFdBeUJJLFFBQVNJLEdBQWNDLEVBQVNDLEdBQzVCLEdBQUlDLEdBQWUsRUFDZkYsR0FBUUcsWUFBY0gsRUFBUUcsV0FBV0QsZUFDekNBLEdBQWdCRixFQUFRRyxXQUFXRCxjQUd2Q0QsRUFBTUcsVUFBVUYsR0E1QnBCLEdBQUlHLEdBQW1CQyxFQUFFQyxVQUFVLDhEQUMzQkMsWUFBYSx5SUFDYkMsV0FBWSxPQUNaQyxRQUFTLEtBRWJDLEVBQTBCTCxFQUFFQyxVQUFVLHdHQUNsQ0MsWUFBYSxnSkFHakJJLEVBQU1OLEVBQUVNLElBQUksT0FDWkMsUUFBUyxPQUFPLFFBQ2hCQyxLQUFNLEVBQ05DLFFBQVNWLEVBQWtCTSxLQUczQkssR0FDQUMsU0FBWVosRUFDWmEsVUFBYVAsRUFHakJMLEdBQUVhLFFBQVFKLE9BQU9DLEdBQVVJLE1BQU1SLEVBWWpDLElBQUlTLEdBQVVmLEVBQUVnQixxQkFDWkMsRUFBTSxHQUFJQyw2QkFBNEJaLEdBRXRDYSxFQUFRLEdBQUluQixHQUFFb0IsS0FFbEJILEdBQUlJLFlBQVksUUFBUyxTQUFTQyxHQUM5QkgsRUFBTUksV0FBV0QsRUFBT0UsTUFDeEJMLEVBQU1NLFVBQVVILEVBQU9JLGFBQ3ZCcEIsRUFBSXFCLFVBQVVSLEtBR2xCRixFQUFJSSxZQUFZLFdBQVksU0FBU04sR0FDN0JULEVBQUlzQixjQUdaLElBQUlDLEdBQWU3QixFQUFFOEIsUUFBUUMsUUFDekJ0QyxjQUFlQSxFQUNmdUMsYUFBYyxTQUFTdEMsRUFBU3VDLEdBQzVCLE1BQU9qQyxHQUFFc0IsT0FBT1csS0FJeEJsQixHQUFRbUIsU0FBU0wsR0FDakJ2QixFQUFJNEIsU0FBU25CLE1BTWpCLFdBQ0ksWUFHQW9CLEdBQUVDLE1BQ0VDLElBQUssMEJBQ0xDLFFBQVMsU0FBU0MsR0FDZEosRUFBRSxnQkFBZ0JLLFdBQ2RDLFNBQ0lDLFFBQVNILEVBQ1RJLE9BQVNDLEtBQU0iLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGRsZiA9IFtcbiAgICAnIF9fX19fICAgXyAgICAgICBfX19fX19fJyxcbiAgICAnKF9fX18gXFxcXCB8IHwgICAgIChfX19fX19fKScsXG4gICAgJyBfICAgXFxcXCBcXFxcfCB8ICAgICAgX19fX18nLFxuICAgICd8IHwgICB8IHwgfCAgICAgfCAgX19fKScsXG4gICAgJ3wgfF9fLyAvfCB8X19fX198IHwnLFxuICAgICd8X19fX18vIHxfX19fX19fKV98J1xuICBdLmpvaW4oJ1xcbicpO1xuXG4gIGNvbnNvbGUubG9nKGRsZik7XG59KSgpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgLy8gJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIENhcnRvREJfUG9zaXRyb24gPSBMLnRpbGVMYXllcignaHR0cDovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vbGlnaHRfYWxsL3t6fS97eH0ve3l9LnBuZycsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+ICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL2NhcnRvZGIuY29tL2F0dHJpYnV0aW9uc1wiPkNhcnRvREI8L2E+JyxcbiAgICAgICAgICAgIHN1YmRvbWFpbnM6ICdhYmNkJyxcbiAgICAgICAgICAgIG1heFpvb206IDE5XG4gICAgICAgIH0pLFxuICAgICAgICBUaHVuZGVyZm9yZXN0X0xhbmRzY2FwZSA9IEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLnRodW5kZXJmb3Jlc3QuY29tL2xhbmRzY2FwZS97en0ve3h9L3t5fS5wbmc/YXBpa2V5PWVkOGE4Yzk4NDQyOTQ5NTg4NTAxNDg5ZTdmODM2ODMxJywge1xuICAgICAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly93d3cudGh1bmRlcmZvcmVzdC5jb20vXCI+VGh1bmRlcmZvcmVzdDwvYT4sICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPidcbiAgICAgICAgfSk7XG5cbiAgICB2YXIgbWFwID0gTC5tYXAoJ21hcCcsIHtcbiAgICAgICAgY2VudGVyOiBbMzkuNzMsIC0xMDQuOTldLFxuICAgICAgICB6b29tOiA0LFxuICAgICAgICBsYXllcnM6IFtDYXJ0b0RCX1Bvc2l0cm9uLCBUaHVuZGVyZm9yZXN0X0xhbmRzY2FwZV1cbiAgICB9KTtcblxuICAgIHZhciBiYXNlTWFwcyA9IHtcbiAgICAgICAgXCJQb3NpdHJvblwiOiBDYXJ0b0RCX1Bvc2l0cm9uLFxuICAgICAgICBcIkxhbmRzY2FwZVwiOiBUaHVuZGVyZm9yZXN0X0xhbmRzY2FwZVxuICAgIH07XG5cbiAgICBMLmNvbnRyb2wubGF5ZXJzKGJhc2VNYXBzKS5hZGRUbyhtYXApO1xuXG4gICAgZnVuY3Rpb24gb25FYWNoRmVhdHVyZShmZWF0dXJlLCBsYXllcikge1xuICAgICAgICB2YXIgcG9wdXBDb250ZW50ID0gJyc7XG4gICAgICAgIGlmIChmZWF0dXJlLnByb3BlcnRpZXMgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzLnBvcHVwQ29udGVudCkge1xuICAgICAgICAgICAgcG9wdXBDb250ZW50ICs9IGZlYXR1cmUucHJvcGVydGllcy5wb3B1cENvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBsYXllci5iaW5kUG9wdXAocG9wdXBDb250ZW50KTtcbiAgICB9XG5cblxuICAgIHZhciBtYXJrZXJzID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoKTsgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vTGVhZmxldC9MZWFmbGV0Lm1hcmtlcmNsdXN0ZXJcbiAgICB2YXIgb21zID0gbmV3IE92ZXJsYXBwaW5nTWFya2VyU3BpZGVyZmllcihtYXApO1xuXG4gICAgdmFyIHBvcHVwID0gbmV3IEwuUG9wdXAoKTtcblxuICAgIG9tcy5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihtYXJrZXIpe1xuICAgICAgICBwb3B1cC5zZXRDb250ZW50KG1hcmtlci5kZXNjKTtcbiAgICAgICAgcG9wdXAuc2V0TGF0TG5nKG1hcmtlci5nZXRMYXRMbmcoKSk7XG4gICAgICAgIG1hcC5vcGVuUG9wdXAocG9wdXApO1xuICAgIH0pO1xuXG4gICAgb21zLmFkZExpc3RlbmVyKCdzcGlkZXJmeScsIGZ1bmN0aW9uKG1hcmtlcnMpe1xuICAgICAgICAgICAgbWFwLmNsb3NlUG9wdXAoKTtcbiAgICB9KTtcblxuICAgIHZhciBnZW9Kc29uTGF5ZXIgPSBMLmdlb0pzb24oZXZlbnRzLCB7XG4gICAgICAgIG9uRWFjaEZlYXR1cmU6IG9uRWFjaEZlYXR1cmUsXG4gICAgICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG5nKSB7XG4gICAgICAgICAgICByZXR1cm4gTC5tYXJrZXIobGF0bG5nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWFya2Vycy5hZGRMYXllcihnZW9Kc29uTGF5ZXIpO1xuICAgIG1hcC5hZGRMYXllcihtYXJrZXJzKTtcbiAgICAvLyBtYXAuZml0Qm91bmRzKG1hcmtlcnMuZ2V0Qm91bmRzKCkpOyAvLyB0aGlzIG1heSBiZSB1c2VmdWxcbn0pKCk7XG5cblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gQHNlZSBodHRwczovL3d3dy5keW5hdGFibGUuY29tLyNqc29uLWZyb20tYWpheFxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy9kYXRhL2V2ZW50c190YWJsZS5qc29uJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgJCgnI2V2ZW50X3RhYmxlJykuZHluYXRhYmxlKHtcbiAgICAgICAgICAgICAgICBkYXRhc2V0OiB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRzOiB7IGRhdGU6IDEgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pKCk7XG4iXX0=
