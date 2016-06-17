import { Component } from '@angular/core';
import { WorkspaceSelectorComponent } from './workspace-selector.component';

@Component({
  selector: 'workspace-navbar',
  template: `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <workspace-selector class="nav navbar-nav"></workspace-selector>
          </ul>
        </div>
      </div>
    </nav>
  `,
  directives: [ WorkspaceSelectorComponent ]
})

export class WorkspaceNavbarComponent {
}


// <div class="navbar-header">
//           <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//             <span class="sr-only">Toggle navigation</span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//           </button>
//           <a class="navbar-brand" href="#">Workspace Switcher</a>
//         </div>