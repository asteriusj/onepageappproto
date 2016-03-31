$(document).ready(function () {

    // Mock Backbone.sync
    Backbone.sync = function (method, model, options) {
        var deferred = $.Deferred();
        deferred.resolve(model.toJSON());
        return deferred.promise();
    };

    
    
    var contactInfo = window.contactInfo = new Backbone.Model(
            {
              id: 101,
              prefix: "Mr",
              givenName: "Andre",
              familyName: "Jones",
              informalName: "",
              suffix: "",
              gender: "MAL",

              address: {
                  address1: "1751 rue Richardson",
                  address2: "Suite 3.105",
                  city: "Montréal",
                  postalCode: "H3K 1G6",
                  province: "QC"
              },
              dateOfBirth: "",
              teamLevel: "",
              emailAddress: "test2@myapplaud.com",
              mobileNumber: "8885554444",
              conInfoFileUpload: "http://myapplaud.com/ApplaudAssets/UserProfileImages/PersonID_49996/ThumbNail_49996_0a8d29dc.jpg?ref=131028977315767161",
          }    
        );
    
    

    

    new Backform.Form({
        el: "#form-contact_info",
        model: contactInfo,
        fields: [
  {
    name: "id",
    label: "Id",
    control: "uneditable-input",
    required: false,
    readonly: false,
    disabled: false,
    visible: true,
    roleattributes: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Observe",
        disabled: false,
        visible: false
      },
      {
        role: "Player",
        privilege: "None",
        disabled: false,
        visible: false
      }
    ]
  },
  {
    name: "prefix",
    label: "Salutation",
    control: "radio",
    options: [
      {
        label: "Dr.",
        value: "Dr"
      },
      {
        label: "Mr.",
        value: "Mr"
      },
      {
        label: "Mrs.",
        value: "Mrs"
      },
      {
        label: "Ms.",
        value: "Ms"
      },
      {
        label: "Mme.",
        value: "Mme"
      }
    ],
    required: false,
    readonly: false,
    disabled: false,
    visible: true,
    roleattributes: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Contribute",
        disabled: false,
        visible: true
      },
      {
        role: "Player",
        privilege: "None",
        disabled: false,
        visible: false
      }
    ]
  },
  {
    name: "givenName",
    label: "First Name",
    control: "input",
    required: false,
    readonly: false,
    disabled: false,
    visible: true,
    roleattributes: [
      {
        role: "Leader Manager",
        privilege: "Contribute",
        required: false,
        readonly: false,
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Observe",
        required: true,
        readonly: false,
        disabled: false,
        visible: true
      },
      {
        role: "Player",
        privilege: "None",
        required: true,
        readonly: true,
        disabled: false,
        visible: true
      }
    ]
  },
  {
    name: "informalName",
    label: "Informal Name",
    control: "input",
    type: "text",
    placeholder: "First name as others know you",
    caption: "My Name Is",
    autocomplete: "off",
    size: 20,
    maxlength: 20,
    required: false,
    readonly: false,
    disabled: false,
    visible: true,
    helpMessage: "Provide the name or nickname that your friends know you by."
  },
  {
    name: "familyName",
    label: "Last Name",
    control: "input",
    required: false,
    readonly: false,
    disabled: false,
    visible: true,
    roleattributes: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        required: false,
        readonly: false,
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Contribute",
        required: true,
        readonly: false,
        disabled: false,
        visible: true
      },
      {
        role: "Player",
        privilege: "N/A",
        required: true,
        readonly: true,
        disabled: false,
        visible: true
      }
    ]
  },
  {
    name: "suffix",
    label: "Suffix",
    control: "input",
    type: "text",
    placeholder: "Suffix or credentials",
    caption: "",
    autocomplete: "off",
    size: 12,
    maxlength: 18,
    required: false,
    readonly: false,
    disabled: false,
    visible: true,
    helpMessage: "Provide the suffix for your name such as Jr, MD, or III.",
    roleattributes: [
      {
        role: "Leader Manager",
        privilege: "Contribute",
        required: false,
        readonly: false,
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Contribute",
        required: false,
        readonly: false,
        disabled: false,
        visible: true
      },
      {
        role: "Player",
        privilege: "None",
        required: false,
        readonly: false,
        disabled: false,
        visible: false
      }
    ]
  },
  {
    control: "spacer"
  },
  {
    name: "address.address1",
    label: "Address Line 1",
    control: "input",
    disabled: false,
    visible: true
  },
  {
    name: "address.address2",
    label: "Address Line 2",
    control: "input",
    disabled: false,
    visible: true
  },
  {
    name: "address.city",
    label: "City",
    control: "input",
    disabled: false,
    visible: true
  },
  {
    name: "address.postalCode",
    label: "Postal Code",
    control: "input",
    disabled: false,
    visible: true
  },
  {
    name: "address.region",
    label: "State or Province",
    control: "select",
    options: [
      {
        label: "Alberta",
        value: "AB"
      },
      {
        label: "British Columbia",
        value: "BC"
      },
      {
        label: "Manitoba",
        value: "MB"
      },
      {
        label: "New Brunswick",
        value: "NB"
      },
      {
        label: "Newfoundland and Labrador",
        value: "NL"
      },
      {
        label: "Northwest Territories",
        value: "NT"
      },
      {
        label: "Nova Scotia",
        value: "NS"
      },
      {
        label: "Nunavut",
        value: "NU"
      },
      {
        label: "Ontario",
        value: "ON"
      },
      {
        label: "Prince Edward Island",
        value: "PE"
      },
      {
        label: "Québec",
        value: "QC"
      },
      {
        label: "Saskatchewan",
        value: "SK"
      },
      {
        label: "Yukon",
        value: "YT"
      }
    ],
    disabled: false,
    visible: true
  },
  {
    control: "spacer"
  },
  {
    name: "dateOfBirth",
    label: "Date of birth",
    control: "datepicker",
    placeholder: "mm/dd/yyyy",
    options: {
      format: "yyyy-mm-dd"
    },
    required: false,
    readonly: false,
    disabled: false,
    visible: true
  },
  {
    name: "teamLevel",
    label: "Team Level",
    control: "radio",
    options: [
      {
        label: "Varsity",
        value: "V"
      },
      {
        label: "Junior Varsity",
        value: "JV"
      },
      {
        label: "Freshmen",
        value: "F"
      }
    ],
    required: false,
    readonly: false,
    disabled: false,
    visible: true,
    roleattributes: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        required: false,
        readonly: false,
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Observe",
        required: false,
        readonly: true,
        disabled: false,
        visible: true
      },
      {
        role: "Player",
        privilege: "N/A",
        required: true,
        readonly: false,
        disabled: false,
        visible: true
      }
    ]
  },
  {
    name: "emailAddress",
    label: "Email Address",
    control: "input",
    type: "email",
    placeholder: "user@domain.com",
    required: false,
    readonly: false,
    disabled: false,
    visible: true
  },
  {
    name: "mobileNumber",
    label: "Mobile Number",
    control: "input",
    type: "number",
    placeholder: "___-___-____",
    required: false,
    disabled: false,
    readonly: false,
    visible: true
  },
  {
    control: "button",
    label: "Save to server"
  }
],
        events: {
            "submit": function (e) {
                e.preventDefault();
                this.model.save().done(function (result) {
                    console.log(result);
                    alert("Form saved to server!");
                });
                return false;
            }
        }
    }).render();


    contactInfo.on("change", function () {
        $("#object").text(JSON.stringify(contactInfo.toJSON(), null, 2));
    }).trigger("change");



   
    // Example with deeply nested objects
    var personAndFamily = new Backbone.Model({
        "firstName": "Andre",
        "lastName": "Jones",
        "relatives": {
            "mother": {
                "firstName": "Elizabeth",
                "lastName": "Jones"
            },
            "father": {
                "firstName": "Douglas",
                "lastName": "Jones"
            }
        }
    });

    new Backform.Form({
        el: "#form-nested",
        model: personAndFamily,
        fields: [
          { name: "firstName", label: "First Name", control: "input" },
          { name: "lastName", label: "Last Name", control: "input" },
          {
              name: "relatives.mother.firstName",
              label: "Mother's First Name",
              control: "input",
          }, {
              name: "relatives.mother.lastName",
              label: "Mother's Last Name",
              control: "input",
          }, {
              name: "relatives.father.firstName",
              label: "Father's First Name",
              control: "input",
          }, {
              name: "relatives.father.lastName",
              label: "Father's Last Name",
              control: "input",
          }
        ]
    }).render();

    personAndFamily.on("change", function () {
        $("#nested-object").text(JSON.stringify(personAndFamily.toJSON(), null, 2));
    }).trigger("change");

    // Example with validation
    var MyModel = Backbone.Model.extend({
        defaults: {
            a: null
        },
        validate: function (attributes, options) {
            this.errorModel.clear();

            var number = this.get("a");
            if (isNaN(number))
                this.errorModel.set({ a: "Not a number!" });
            else if (number <= 10 || number >= 20)
                this.errorModel.set({ a: "Must be between 10 and 20" });

            if (!_.isEmpty(_.compact(this.errorModel.toJSON())))
                return "Validation errors. Please fix.";
        }
    });

    var form = new Backform.Form({
        el: "#form-validation",
        model: new MyModel(),
        fields: [{
            name: "a",
            label: "Type in a number between 10 and 20. Submit the form to validate.",
            control: "input",
            type: "number"
        }, {
            id: "submit",
            control: "button"
        }]
    }).render();

    form.$el.on("submit", function (e) {
        e.preventDefault();
        var submit = form.fields.get("submit");

        if (form.model.isValid())
            submit.set({ status: "success", message: "Success!" });
        else
            submit.set({ status: "error", message: form.model.validationError });

        return false;
    });

});
