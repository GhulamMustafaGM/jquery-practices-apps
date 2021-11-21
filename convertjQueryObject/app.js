var element = $( '<h1></h1>', {
    text: "jQuery",
    class: "test"
} );

$( '#output' ).text( element.get( 0 ).outerHTML );