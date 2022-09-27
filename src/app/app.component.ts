import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  rotate = true;


  facilityData = {
    nodes: [
      {
        id: 'thrt',
        name: 'Threat(7)',
      },
      {
        id: 'prcs',
        name: 'Process(5)',
      },
      {
        id: 'vlnb',
        name: 'Vulnarability(5)',
      },
      {
        id: 'plcy',
        name: 'Policy(3)',
      },
      {
        id: 'host',
        name: 'Host(6)',
      },
      {
        id: 'usb',
        name: 'USB(6)',
      },
      {
        id: 'ntwk',
        name: 'Network(5)',
      },
      {
        id: 'bms',
        name: 'BMS(5)',
      },
      {
        id: 'wind',
        name: 'Windows(8)',
      },
      {
        id: 'temp',
        name: 'Temp Control(5)',
      },
      {
        id: 'oprn',
        name: 'Operation Station(4)',
      },
      {
        id: 'cnrl',
        name: 'Controller(2)',
      },
      {
        id: 'swtc',
        name: 'Switch(2)',
      },
      {
        id: 'sunmm',
        name: 'SUN MM17 Factory(5)',
      },      
    ],
    links: [
      {
        source: 'thrt',
        target: 'host',
        value: 100,
      },
      {
        source: 'thrt',
        target: 'usb',
        value: 300,
      },
      {
        source: 'thrt',
        target: 'ntwk',
        value: 300,
      },
      {
        source: 'prcs',
        target: 'host',
        value: 200,
      },
      {
        source: 'prcs',
        target: 'ntwk',
        value: 100,
      },
      {
        source: 'prcs',
        target: 'bms',
        value: 200,
      },      
      {
        source: 'vlnb',
        target: 'host',
        value: 300,
      },
      {
        source: 'vlnb',
        target: 'usb',
        value: 100,
      },
      {
        source: 'vlnb',
        target: 'ntwk',
        value: 100,
      },
      {
        source: 'plcy',
        target: 'usb',
        value: 200,
      },
      {
        source: 'plcy',
        target: 'bms',
        value: 100,
      }, 
      {
        source: 'host',
        target: 'wind',
        value: 300,
      },
      {
        source: 'host',
        target: 'temp',
        value: 300,
      }, 
      {
        source: 'usb',
        target: 'wind',
        value: 300,
      },       
      {
        source: 'usb',
        target: 'oprn',
        value: 300,
      },  
      {
        source: 'ntwk',
        target: 'wind',
        value: 200,
      },       
      {
        source: 'ntwk',
        target: 'temp',
        value: 200,
      },   
      {
        source: 'ntwk',
        target: 'swtc',
        value: 100,
      },  
      {
        source: 'bms',
        target: 'oprn',
        value: 100,
      },
      {
        source: 'bms',
        target: 'cnrl',
        value: 100,
      },             
      {
        source: 'bms',
        target: 'swtc',
        value: 100,
      },       
      {
        source: 'ntwk',
        target: 'swtc',
        value: 100,
      },  
      {
        source: 'wind',
        target: 'sunmm',
        value: 500,
      },
      {
        source: 'temp',
        target: 'sunmm',
        value: 400,
      },             
      {
        source: 'oprn',
        target: 'sunmm',
        value: 300,
      },        
      {
        source: 'cnrl',
        target: 'sunmm',
        value: 200,
      },   
      {
        source: 'swtc',
        target: 'sunmm',
        value: 100,
      },                         
    ],
  };
  sampleData = this.facilityData;

  onFacilitySelect($event) {
    console.log('ON SELECT: ', $event);
  }

  onChange($event) {
    console.log('ON CHANGE: ', $event);
    // this.sampleData = this[$event.target.value];

    console.log(this.sampleData);
  }
}
