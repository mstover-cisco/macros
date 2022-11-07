// This Macro changes the role of the rear monitor (monitor 3) from first to second
// The codec will not reset the role, so user must toggle between modes while out of a call

import xapi from 'xapi';

function log(entry) {
    console.log(entry);
}

log ('Classroom Monitor Layout');

const mr1  = 'First';
const mr2  = 'Second';

xapi.event.on('UserInterface Extensions Widget Action', (event) => {
   if (event.Type == "released" && event.WidgetId == "Monitor_Layout") {
      console.log ('Going to Change Monitor Layout.....');
       switch (event.Value) {
        case '1': // Set to Monitor 3 Role to First
            log ('Changing Monitor Layout to A');
            xapi.Config.Video.Output.Connector[3].MonitorRole.set(mr1); // set Monitor 3 to First.            
          break;
        case '2': // Set to Monitor 3 Role to Second
            log ('Changing Monitor Layout to B');
            xapi.Config.Video.Output.Connector[3].MonitorRole.set(mr2); // set Monitor 3 to Second.      
          break;
        default:
        }
    return;
  }        
});
