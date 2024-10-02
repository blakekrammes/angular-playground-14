import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <link rel="stylesheet" href="https://cdn.form.io/uswds/uswds.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.1.0/css/uswds.min.css">
    <div class="form-container">
      <formio [form]='{
        "title": "My Test Form",
        "display": "wizard",
        "components": [
          {
            "title": "Page 1",
            "label": "Page 1",
            "type": "panel",
            "key": "page1",
            "components": [
              {
                "label": "First Name",
                "applyMaskOn": "change",
                "tableView": true,
                "validateWhenHidden": false,
                "key": "firstName",
                "type": "textfield",
                "input": true
              },
              {
                "label": "Last Name",
                "applyMaskOn": "change",
                "tableView": true,
                "validateWhenHidden": false,
                "key": "lastName",
                "type": "textfield",
                "input": true
              },
              
            ],
            "input": false,
            "tableView": false
          },
          {
            "title": "Page 2",
            "label": "Page 2",
            "type": "panel",
            "key": "page2",
            "components": [
              {
                "label": "Bio",
                "applyMaskOn": "change",
                "autoExpand": false,
                "tableView": true,
                "validateWhenHidden": false,
                "key": "bio",
                "type": "textarea",
                "input": true
              }
            ],
            "input": false,
            "tableView": false
          },
          {
            "title": "Page 3",
            "label": "Page 3",
            "type": "panel",
            "key": "page3",
            "components": [
              {
                "label": "Phone Number",
                "applyMaskOn": "change",
                "mask": false,
                "tableView": false,
                "delimiter": false,
                "requireDecimal": false,
                "inputFormat": "plain",
                "truncateMultipleSpaces": false,
                "validateWhenHidden": false,
                "key": "phoneNumber",
                "type": "number",
                "input": true
              }
            ],
            "input": false,
            "tableView": false
          } 
        ]}' 
      [renderOptions]='{ 
        buttonSettings: {
          showCancel: true,
          showSubmit: true,
          showNext: true,
          showPrevious: true
        } 
      }'>
    </formio>
  </div>
  `,
})

export class AppComponent { }
