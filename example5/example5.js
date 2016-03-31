$(document).ready(function () {

    // Mock Backbone.sync
    Backbone.sync = function (method, model, options) {
        var deferred = $.Deferred();
        deferred.resolve(model.toJSON());
        return deferred.promise();
    };

//$("[name='Pregnant']").bootstrapSwitch();


    // Example with profile_facts
    new Backform.Form({
        el: $("#form-profile_facts"),
        model: new Backbone.Model(),
        fields: [
            { id: "ProfileFacts_dlstFactsEditAns_ctl01", name: "facts_ct101", label: "Recount your most gratifying team moment this season.", control: "textarea", extraClasses: ["fancy"], placeholder: "Be creative!" },
            { id: "ProfileFacts_dlstFactsEditAns_ctl02", name: "facts_ct102", label: "Imagine you're the coach, what advice would you give your players?", control: "textarea", required: true, extraClasses: ["fancy"], helpMessage: "Be creative!" },
            { id: "ProfileFacts_dlstFactsEditAns_ctl03", name: "facts_ct103", label: "Tell me about the most memorable thing your coach said or did for you this season.", control: "textarea", extraClasses: ["fancy"], helpMessage: "Be creative!" },

        ]
    }).render();
    

    new Backform.Form({
        el: "#form-catagory_response",
        model: categoryTab,
        fields: [
            
            {
                id: "406", 
                name: "MedicalConcern",
                label: "Medical Concern:",
                control: "select",
                options: [
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" },
                    { label: "N/A", value: "N/A" }
                ],
                sortorder: ""
            },

          { id: "407", name: "GeneralHealth", label: "General Health", control: "input" },

          { id: "408", name: "LastPhysicalDate", label: "Last Physical Date", control: "datepicker" },
          
          { id: "409", name: "HealthCareProvider", label: "Health Care Provider", control: "input", size: 4 },

          { id: "410", name: "HealthCaseManager", label: "Health Case Manager", control: "input" },
        
          {
                id: "411", 
                name: "Insurance",
                label: "Insurance:",
                control: "radio",
                options: [
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" },
                ],
                sortorder: ""
            },
          
          {
                id: "412", 
                name: "MedicalCard",
                label: "Medical Card:",
                control: "radio",
                options: [
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" },
                ],
                sortorder: ""
            },
            
            {
                id: "413", 
                name: "Vision",
                label: "Vision",
                control: "select",
                options: [
                    { id: "545", name: "Vision_Excellent", label: "Excellent", value: "Excellent" },
                    { id: "546", name: "Vision_Good", label: "Good", value: "Good" },
                    { id: "547", name: "Vision_Average", label: "Average", value: "Average" },
                    { id: "548", name: "Vision_Poor", label: "Poor", value: "Poor" },
                    { id: "549", name: "Vision_Failing", label: "Failing", value: "Failing" }
                ],
                sortorder: ""
            },
            
            {
                id: "414", 
                name: "Hearing",
                label: "Hearing",
                control: "select",
                options: [
                    { id: "550", name: "Hearing_Excellent", label: "Excellent", value: "Excellent" },
                    { id: "551", name: "Hearing_Good", label: "Good", value: "Good" },
                    { id: "552", name: "Hearing_Average", label: "Average", value: "Average" },
                    { id: "553", name: "Hearing_Poor", label: "Poor", value: "Poor" },
                    { id: "554", name: "Hearing_Failing", label: "Failing", value: "Failing" }
                ],
                sortorder: ""
            },       
       
            {
                id: "415", 
                name: "Teeth",
                label: "Teeth",
                control: "select",
                options: [
                    { id: "555", name: "Teeth_Excellent", label: "Excellent", value: "Excellent" },
                    { id: "556", name: "Teeth_Good", label: "Good", value: "Good" },
                    { id: "557", name: "Teeth_Average", label: "Average", value: "Average" },
                    { id: "558", name: "Teeth_Poor", label: "Poor", value: "Poor" },
                    { id: "559", name: "Teeth_Failing", label: "Failing", value: "Failing" }
                ],
                sortorder: ""
            },              
            
          {
                id: "432", 
                name: "Pregnant",
                label: "Pregnant:",
                control: "boolean",
                tabindex: ""
            },
            
          {
              id: "433",
              name: "DueDate",
              label: "Due Date",
              control: "input",
              type: "date",
              required: false,
              placeholder: "Only complete if answer is Yes to Pregent",
              helpMessage: "Only complete if answer is Yes to Pregent"
          },
          
          
          { control: "spacer" },
          
          { control: "button", label: "Save to server" }
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


    categoryTab.on("change", function () {
        $("#object").text(JSON.stringify(categoryTab.toJSON(), null, 2));
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
