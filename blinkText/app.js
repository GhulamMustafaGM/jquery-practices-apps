function blinkText ()
{
    $( '.blink' ).fadeOut( 500 );
    $( '.blink' ).fadeIn( 500 );
}
setInterval( blinkText, 1000 );