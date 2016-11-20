$(function () {


    $('.linkedPicker').datepick({
        dateFormat: 'dd-mm-yyyy',
        yearRange: 'c-100:c+100',
        alignment: 'bottomRight',
        onSelect: updateLinked,
        showTrigger: '#calImg'
    });

    $('.linkedText').change(function () {

        var year = parseInt($(this).parent().find('#linkedYear').val(), 10);
        var month = parseInt($(this).parent().find('#linkedMonth').val(), 10) - 1;
        var day = parseInt($(this).parent().find('#linkedDay').val(), 10);


        var date = new Date(year, month, day);

        if (!isNaN(date.getTime())){
            $(this).parent().find('.linkedPicker').datepick('setDate', new Date(year, month, day));
        }
      
    });


    //$('.linkedText').change(function () {

    //    var day = $(this).parent().find('#linkedDay').val();
    //    var month = $(this).parent().find('#linkedMonth').val();
    //    var year = $(this).parent().find('#linkedYear').val();
    //    var currentDate = day + '/' + month + '/' + year;
    //    // if (day.trim() != '' && month.trim() != '' && year.trim() != '') {

    //    $(this).parent().find('.linkedPicker').val(currentDate);
    //    if (!isNaN(currentDate.getTime())){
    //        $(this).parent().find('.linkedPicker').datepick('setDate', new Date(year, month-1, day));
    //    }
    //    //$(this).parent().find('.date').datepicker('setDate', currentDate);
    //    //}
    //    //$(".datepicker").datepicker("update", new Date());
    //   // console.log($(this).parent().find('.datepicker-textbox').val());

    //    //if (!isNaN(date.getTime())){
    //    //    $(this).parent().find('.linkedPicker').datepick('setDate', new Date(year, month, day));
    //    //}
      
    //});

});

function showDate(date) {
    alert('The date chosen is ' + date);
}

function updateLinked(dates) {
    $(this).parent().find('#linkedMonth').val(dates.length ? dates[0].getMonth() + 1 : '');
    $(this).parent().find('#linkedDay').val(dates.length ? dates[0].getDate() : '');
    $(this).parent().find('#linkedYear').val(dates.length ? dates[0].getFullYear() : '');
}

function isValidDate(date, format) {
    var isValid = true;

    try {
        $.datepicker.parseDate(format, date, null);
    }
    catch (error) {
        isValid = false;
    }

    return isValid;
}
