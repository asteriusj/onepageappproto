// apps scripts
//
// ToDo:
//  - function to return RoleProfiles for User 
//  - fuction the change Role and RoleProfile parameter based on selection
//  - function to read appPageMap JSON into scooped var
//  - function to update visbility and xxx of section based on Role
//  - function to read activityFormFields JSON into scooped var
//  - function to update section form and field attributes based on Role
//  - function to read contentTree JSON into scooped var
//  - function to render backform model, form and field


/* global pageMap */
var pageMap = getPageMap();
//console.log(pageMap) ;

function getPageMap() {
  
  console.log('fetching pageMap json ...');
  var applicationPageMaps;

  $.getJSON( "applicationPageMaps.json", { } )
    .done(function( json ) {
      //console.log( "JSON Data: " + JSON.stringify(json) );
      applicationPageMaps = json.pages;
      pageMap = applicationPageMaps[0];
      console.log('got it.');
      return pageMap;
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
      return null;
  });
  
  

}



/* global contentTree */
var contentTree = getContentTree();
//console.log(contentTree) ;

function getContentTree() {
  
  console.log('fetching contentTree json');
  var bespokeContentTrees;

   $.getJSON( "bespokeContentTrees.json", { } )
    .done(function( json ) {
      //console.log( "JSON Data: " + JSON.stringify(json) );
      bespokeContentTrees =  json.trees;
      return bespokeContentTrees[0] ;
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
      return null;
  });

}