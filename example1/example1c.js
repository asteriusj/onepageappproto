$(document).ready(function () {

    // Mock Backbone.sync
    Backbone.sync = function (method, model, options) {
        var deferred = $.Deferred();
        deferred.resolve(model.toJSON());
        return deferred.promise();
    };

    
    // example for contact information
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
    
    // Form definitions for contact info
    new Backform.Form({
        el: "#form-contact_info",
        model: contactInfo,
        fields: [
  {
    name: "id",
    label: "Id",
    control: "uneditable-input",
    required: false,
    readonly: true,
    disabled: true,
    visible: false,
    roleprivileges: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        access: "crud",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Observe",
        access: "r",
        disabled: true,
        visible: false
      },
      {
        role: "Player",
        privilege: "None",
        access: null,
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
    readonly: true,
    disabled: true,
    visible: true,
    roleprivileges: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        access: "crud",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Observe",
        access: "r",
        disabled: true,
        visible: true
      },
      {
        role: "Player",
        privilege: "None",
        access: null,
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
    readonly: true,
    disabled: true,
    visible: true,
    roleprivileges: [
      {
        role: "Leader Manager",
        privilege: "Contribute",
        access: "cru",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Observe",
        access: "r",
        disabled: false,
        visible: true
      },
      {
        role: "Player",
        privilege: "None",
        access: null,
        disabled: false,
        visible: false
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
    readonly: true,
    disabled: true,
    visible: true,
    helpMessage: "Provide the name or nickname that your friends know you by."
  },
  {
    name: "familyName",
    label: "Last Name",
    control: "input",
    required: false,
    readonly: true,
    disabled: true,
    visible: true,
    roleprivileges: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        access: "crud",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Observe",
        access: "r",
        disabled: false,
        visible: false
      },
      {
        role: "Player",
        privilege: "None",
        access: null,
        disabled: false,
        visible: false
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
    readonly: true,
    disabled: true,
    visible: true,
    helpMessage: "Provide the suffix for your name such as Jr, MD, or III.",
    roleprivileges: [
      {
        role: "Leader Manager",
        privilege: "Contribute",
        access: "cru",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Contribute",
        access: "cru",
        disabled: true,
        visible: true
      },
      {
        role: "Player",
        privilege: "None",
        access: null,
        disabled: false,
        visible: false
      }
    ]
  },
  {
    name: "address.address1",
    label: "Address Line 1",
    control: "input",
    disabled: true,
    visible: true
  },
  {
    name: "address.address2",
    label: "Address Line 2",
    control: "input",
    disabled: true,
    visible: true
  },
  {
    name: "address.city",
    label: "City",
    control: "input",
    disabled: true,
    visible: true
  },
  {
    name: "address.postalCode",
    label: "Postal Code",
    control: "input",
    disabled: true,
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
    disabled: true,
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
    readonly: true,
    disabled: true,
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
    required: true,
    readonly: true,
    disabled: true,
    visible: true,
    roleprivileges: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        access: "crud",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "Observe",
        access: "r",
        disabled: true,
        visible: true
      },
      {
        role: "Player",
        privilege: "None",
        access: null,
        disabled: false,
        visible: false
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
    readonly: true,
    disabled: true,
    visible: true
  },
  {
    name: "mobileNumber",
    label: "Mobile Number",
    control: "input",
    type: "number",
    placeholder: "___-___-____",
    required: false,
    disabled: true,
    readonly: true,
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

  
  
  
 
    //sample for profile facts
    var profileFacts = window.profileFacts = new Backbone.Model({
            ProfileFacts_dlstFactsEditAns_ctl01: "a onea",
            ProfileFacts_dlstFactsEditAns_ctl02: "and a twoa",
            ProfileFacts_dlstFactsEditAns_ctl03: "and a threea",
            ProfileFacts_dlstFactsEditAns_ctl04: "",
            ProfileFacts_dlstFactsEditAns_ctl05: "",
            ProfileFacts_dlstFactsEditAns_ctl06: "",
            ProfileFacts_dlstFactsEditAns_ctl04: "",
            ProfileFacts_dlstFactsEditAns_ctl05: "",
            ProfileFacts_dlstFactsEditAns_ctl06: "",
           
        });
        
        
        
    // content and form defs for profile photos
    var profilePhotos = window.profilePhotos = new Backbone.Model({
            profilePhoto_1: "http://myapplaud.com/ApplaudAssets/UserProfileImages/PersonID_49996/ThumbNail_49996_0a8d29dc.jpg?ref=131028977315767161",

 
        }); 

    new Backform.Form({
        el: "#form-profile_photos",
        model: profilePhotos,
        fields: [
      {
        name: "profilePhoto_1",
        label: "Profile Photo 1",
        control: "input",
        required: false,
        readonly: true,
        disabled: true,
        visible: true,
        roleprivileges: [
          {
            role: "Leader Manager",
            privilege: "Manage",
            access: "crud",
            disabled: false,
            visible: true
          },
          {
            role: "Staff",
            privilege: "Observe",
            access: "r",
            disabled: true,
            visible: true
          },
          {
            role: "Player",
            privilege: "None",
            access: null,
            disabled: false,
            visible: false
          }
        }
  
    ]
    }).render();

    contactInfo.on("change", function () {
        $("#object").text(JSON.stringify(contactInfo.toJSON(), null, 2));
    }).trigger("change");
     

      
      
      
      
    // Example with medical information
    var medicalInfo = new Backbone.Model({ 
            
            MedicalConcern: "No",
            GeneralHealth: "Good",
            LastPhysicalDate: "2/13/2015 12:00:00 AM",
            HealthCareProvider: "4593",
            HealthCaseManager: "",
            Insurance: "Yes",
            MedicalCard: "No",
            Vision: "Failing",
            Hearing: "Excellent",
            Teeth: "Excellent",
            Sleep: "Average",
            Dietary: "Average",
            Hygiene: "Excellent",
            Smoker: "Yes",
            Injuries: "No",
            Allergies: "No",
            AIDSHIV: "No",
            HepOther: "No",
            TB: "No",
            STD: "No",
            ChronicProblems: "No",
            PhysicalDisability: "No",
            Seizures: "No",
            Prescription: "Yes",
            TakingProperly: "Yes",
            Pregnant: "Yes",
            DueDate: ""
                        
        });
        
    new Backform.Form({
        el: "#form-medical_response_fields",
        model: medicalInfo,
        fields: [
  {
    name: "MedicalConcern",
    label: "Medical Concern",
    control: "input"
  },
  {
    name: "GeneralHealth",
    label: "General Health",
    control: "input"
  },
  {
    name: "LastPhysicalDate",
    label: "Last Physical Date",
    control: "datepicker",
    placeholder: "mm/dd/yyyy",
    options: {
      format: "mm-dd-yyyy"
    },
    required: false,
    readonly: true,
    disabled: true,
    visible: true
  },
  {
    name: "HealthCareProvider",
    label: "HealthCare Provider",
    control: "input"
  },
  {
    name: "HealthCaseManager",
    label: "Health Case Manager",
    control: "input"
  },
  {
    name: "Insurance",
    label: "Insurance",
    control: "boolean"
  },
  {
    name: "MedicalCard",
    label: "MedicalCard",
    control: "boolean"
  },
  {
    name: "Vision",
    label: "Vision",
    control: "select",
    options: [
      {
        label: "Excellent",
        value: "Excellent"
      },
      {
        label: "Good",
        value: "Good"
      },
      {
        label: "Average",
        value: "Average"
      },
      {
        label: "Poor",
        value: "Poor"
      },
      {
        label: "Failing",
        value: "Failing"
      },
      
    ],
    disabled: true,
    visible: true
  },
  {
    name: "Hearing",
    label: "Hearing",
    control: "select",
    options: [
      {
        label: "Excellent",
        value: "Excellent"
      },
      {
        label: "Good",
        value: "Good"
      },
      {
        label: "Average",
        value: "Average"
      },
      {
        label: "Poor",
        value: "Poor"
      },
      {
        label: "Failing",
        value: "Failing"
      },
      
    ],
    disabled: true,
    visible: true
  },
  {
    name: "Teeth",
    label: "Teeth",
    control: "select",
    options: [
      {
        label: "Excellent",
        value: "Excellent"
      },
      {
        label: "Good",
        value: "Good"
      },
      {
        label: "Average",
        value: "Average"
      },
      {
        label: "Poor",
        value: "Poor"
      },
      {
        label: "Failing",
        value: "Failing"
      },
      
    ],
    disabled: true,
    visible: true
  },
  {
    name: "Sleep",
    label: "Sleep",
    control: "select",
    options: [
      {
        label: "Excellent",
        value: "Excellent"
      },
      {
        label: "Good",
        value: "Good"
      },
      {
        label: "Average",
        value: "Average"
      },
      {
        label: "Poor",
        value: "Poor"
      },
      {
        label: "Failing",
        value: "Failing"
      },
      
    ],
    disabled: true,
    visible: true
  },
  {
    name: "Dietary",
    label: "Dietary",
    control: "select",
    options: [
      {
        label: "Excellent",
        value: "Excellent"
      },
      {
        label: "Good",
        value: "Good"
      },
      {
        label: "Average",
        value: "Average"
      },
      {
        label: "Poor",
        value: "Poor"
      },
      {
        label: "Failing",
        value: "Failing"
      },
      
    ],
    disabled: true,
    visible: true
  },
  {
    name: "Hygiene",
    label: "Hygiene",
    control: "select",
    options: [
      {
        label: "Excellent",
        value: "Excellent"
      },
      {
        label: "Good",
        value: "Good"
      },
      {
        label: "Average",
        value: "Average"
      },
      {
        label: "Poor",
        value: "Poor"
      },
      {
        label: "Failing",
        value: "Failing"
      },
      
    ],
    disabled: true,
    visible: true
  },
  {
    name: "Smoker",
    label: "Smoker",
    control: "boolean"
  },
  {
    name: "Injuries",
    label: "Injuries",
    control: "boolean"
  },
  {
    name: "Allergies",
    label: "Injuries",
    control: "boolean"
  },
  {
    name: "AIDSHIV",
    label: "AIDSHIV",
    control: "boolean",
    required: false,
    readonly: true,
    disabled: true,
    visible: false,
    roleprivileges: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        access: "crud",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "None",
        access: null,
        disabled: false,
        visible: true
      },
      {
        role: "Player",
        privilege: "None",
        access: null,
        disabled: false,
        visible: false
      }
    ]
  },
  {
    name: "HepOther",
    label: "HepOther",
    control: "boolean",
    required: false,
    readonly: true,
    disabled: true,
    visible: false,
    roleprivileges: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        access: "crud",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "None",
        access: null,
        disabled: true,
        visible: false
      },
      {
        role: "Player",
        privilege: "None",
        access: null,
        disabled: false,
        visible: false
      }
    ]
  },
  {
    name: "TB",
    label: "TB",
    control: "boolean"
  },
  {
    name: "STD",
    label: "STD",
    control: "boolean",
    required: false,
    readonly: false,
    disabled: false,
    visible: false,
    roleprivileges: [
      {
        role: "Leader Manager",
        privilege: "Manage",
        access: "crud",
        disabled: false,
        visible: true
      },
      {
        role: "Staff",
        privilege: "None",
        access: null,
        disabled: false,
        visible: false
      },
      {
        role: "Player",
        privilege: "None",
        access: null,
        disabled: false,
        visible: false
      }
    ]
  },
  {
    name: "ChronicProblems",
    label: "Chronic Problems",
    control: "boolean"
  },
  {
    name: "PhysicalDisability",
    label: "Physical Disability",
    control: "boolean"
  },
  {
    name: "Prescription",
    label: "Prescription",
    control: "boolean"
  },
  {
    name: "Pregnant",
    label: "Pregnant",
    control: "checkbox"
  },
  {
    name: "DueDate",
    label: "Due Date",
    control: "datepicker",
    placeholder: "mm/dd/yyyy",
    options: {
      format: "mm-dd-yyyy"
    },
    required: false,
    readonly: true,
    disabled: true,
    visible: true
  },
  
]
    }).render();

    medicalInfo.on("change", function () {
        $("#nested-object").text(JSON.stringify(medicalInfo.toJSON(), null, 2));
    }).trigger("change");
    
    

    
    
    // note
    var medCaseNotes = window.medCaseNotes = new Backbone.Model({ 
            
            noteTaker: "No",
            noteTaken: "2016-01-15",
            noteText: "Good so far",
            
      });




   
   
   
   
   
   
   
   
   
    // Example with client identity
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
        el: "#form-client_identifcation",
        model: clientIdentiy,
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
