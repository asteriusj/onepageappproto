$(document).ready(function () {


        var contactInfo = window.contactInfo = new Backbone.Model({
              id: 101,
              salutation: "Mr",
              firstName: "Andre",
              lastName: "Jones",
              informalName: "",
              gender: "MAL",

              address: {
                  address1: "1751 rue Richardson",
                  address2: "Suite 3.105",
                  city: "Montréal",
                  postalCode: "H3K 1G6",
                  province: "QC"
              },
              dateOfBirth: "",
              teamLevel: "V",
              emailAddress: "test2@myapplaud.com",
              mobileNumber: "9999999999",
              conInfoFileUpload: "http://myapplaud.com/ApplaudAssets/UserProfileImages/PersonID_49996/ThumbNail_49996_0a8d29dc.jpg?ref=131028977315767161",
          });





    // Mock Backbone.sync
    Backbone.sync = function (method, model, options) {
        var deferred = $.Deferred();
        deferred.resolve(model.toJSON());
        return deferred.promise();
    };

    

    new Backform.Form({
        el: "#form-contact_info",
        model: contactInfo,
        fields: [
  {
    name: "id",
    label: "Id",
    control: "uneditable-input"
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
      },
      
    ]
  },
  {
    name: "firstName",
    label: "First Name",
    control: "input",
    required: true,
    disabled: false,
    readonly: true,
    visible: true,
    
  },
  {
    name: "informalName",
    label: "Informal Name",
    control: "input",
    type: "text",
    placeholder: "First name as others know you and for MemoryBook",
    caption: "My Name Is",
    autocomplete: "off",
    size: 20,
    maxlength: 20,
    required: false,
    disabled: false,
    readonly: false,
    visible: true,
    helpMessage: "Provide the name or nickname that your freinds know you by."
  },
  {
    name: "lastName",
    label: "Last Name",
    control: "input",
    required: true,
    disabled: false,
    readonly: true,
    visible: true,
    
  },
  {
    name: "suffix",
    label: "Suffix",
    control: "input",
    type: "text",
    placeholder: "Suffix or credentials",
    caption: "",
    autocomplete: "off",
    size: 20,
    maxlength: 20,
    required: false,
    disabled: false,
    readonly: false,
    visible: true,
    helpMessage: "Provide the suffix for your name such as Jr, MD, or III."
  },
  {
    control: "spacer"
  },
  {
    name: "address.address1",
    label: "Address Line 1",
    control: "input"
  },
  {
    name: "address.address2",
    label: "Address Line 2",
    control: "input"
  },
  {
    name: "address.city",
    label: "City",
    control: "input"
  },
  {
    name: "address.postalCode",
    label: "Postal Code",
    control: "input"
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
    ]
  },
  {
    control: "spacer"
  },
  {
    name: "dateOfBirth",
    label: "Date of birth",
    control: "datepicker",
    placeholder: "mm dd yyyy",
    options: {
      format: "yyyy-mm-dd"
    }
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
        label: "Freshmen.",
        value: "F"
     }
    ],
    required: true,
    disabled: false,
    readonly: false,
    visible: true,
    
  },
  {
    name: "emailAddress",
    label: "Email Address",
    control: "input",
    type: "email",
    placeholder: "user@domain.com",
    required: false,
    disabled: false,
    readonly: true,
    visible: true,
    
  },
  {
    name: "mobileNumber",
    label: "Mobilenumber",
    control: "input",
    type: "number",
    placeholder: "___-___-____",
    required: true,
    disabled: false,
    readonly: true,
    visible: true,
    
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



    // Example with profile_facts
    new Backform.Form({
        el: $("#form-profile_facts"),
        model: new Backbone.Model(),
        fields: [
            { id: "ProfileFacts_dlstFactsEditAns_ctl01", name: "facts_ct101", label: "Recount your most gratifying team moment this season.", control: "textarea", extraClasses: ["fancy"], helpMessage: "Be creative!" },
            { id: "ProfileFacts_dlstFactsEditAns_ctl02", name: "facts_ct102", label: "Imagine you're the coach, what advice would you give your players?", control: "textarea", required: true, extraClasses: ["fancy"], helpMessage: "Be creative!" },
            { id: "ProfileFacts_dlstFactsEditAns_ctl03", name: "facts_ct103", label: "Tell me about the most memorable thing your coach said or did for you this season.", control: "textarea", extraClasses: ["fancy"], helpMessage: "Be creative!" },

        ]
    }).render();

    // Example with profile question answer
    window.f = new Backform.Form({
        el: $("#form-profile_story"),
        model: profileStory,
        fields: [
            { id: "ProfileStory_dlstQuesAns_ctl01", name: "story_ct101", label: "Describe one memory from playing in a high school sport that makes you glad you played on a team.", control: "textarea", extraClasses: ["fancy"], helpMessage: "Be creative!" },
            { id: "ProfileStory_dlstQuesAns_ctl02", name: "story_ct102", label: "Recount your favorite moment this season.", control: "textarea", extraClasses: ["fancy"], helpMessage: "Be creative!" },
            { id: "ProfileStory_dlstQuesAns_ctl03", name: "story_ct103", label: "How would you like your team to remember you?", control: "textarea", extraClasses: ["fancy"], helpMessage: "Be creative!" },

            
        
        ]
    }).render();


    

    // Example with profile_photos
    new Backform.Form({
        el: $("#form-profile_photos"),
        model: profilePhotos,
        fields: [

            {
                id: "ctl01",
                name: "toggle",
                label: "Are you a programmer?",
                control: "radio",
                options: [{ label: "Yes", value: true }, { label: "No", value: false }]
            },
        {
            id: "ctl02",
            name: "years",
            label: "For how many years?",
            disabled: function (m) { return m && m.get("toggle"); },
            control: Backform.InputControl.extend({
                initialize: function () {
                    Backform.InputControl.prototype.initialize.apply(this, arguments);
                    this.listenTo(this.model, "change:toggle", this.render);
                }
                })
            },
                { id: "ctl03", name: "lifeGoal", label: "Life goal", control: "textarea", extraClasses: ["fancy"], helpMessage: "Be creative!" },
            { id: "ctl04", name: "favoriteNumber", label: "Favorite Number", control: "input", type: "number" },
        ]
    }).render();

    $("#form-email").on("submit", function (e) {
        alert("Browser validation passed");
        return false;
    });

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
