var main = {
    init: function () {
        var me = main;
        jQuery(document).on('click','.add_custom_button',me.addCustomButtonOnClick);
    },
    addCustomButtonOnClick: function(e) {
        e.preventDefault();
        var me = main;
        var row = jQuery('.custom_attribute_row');
        var htmlstring = row.html(); 
        var randomString = main.randomString(6); 
        htmlstring = htmlstring.replace(/\__UNIQUE__/g, randomString);
       
        jQuery('.attribute_key_value_row').append(htmlstring);
    },
    randomString: function(limit) {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";
        for( var i=0; i < limit -1; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        return text;
    }
}

jQuery(document).ready(main.init);