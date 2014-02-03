$(document).ready(function(){
	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})


     var timezone = jstz.determine();

   

    $(document).ready(function() {
        $('#calendar').fullCalendar({
        
            // US Holidays
          events: {
            url: 'http://www.google.com/calendar/feeds/philippines__en%40holiday.calendar.google.com/public/basic',
            className: 'gcal-event',           // an option!
            currentTimezone: timezone // an option!
          },
            
            eventClick: function(event) {
                // opens events in a popup window
                window.open(event.url, 'gcalevent', 'width=700,height=600');
                return false;
            },
            
            loading: function(bool) {
                if (bool) {
                    $('#loading').show();
                }else{
                    $('#loading').hide();
                }
            }
            
        });
        
    });



});
