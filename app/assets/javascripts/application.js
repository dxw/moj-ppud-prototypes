/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  $('.issue-with-document').on('click', function() {
    var $row = $(this).parents('tr')
    var $reasonRow = $row.next()
    
    if($(this).prop('checked') == true) {
      $row.find('.govuk-table__cell').css('border-bottom', 'none')
      $reasonRow.show();
    } else {
      $row.find('.govuk-table__cell').css('border-bottom', '1px solid #b1b4b6')
      $reasonRow.hide();
    }
  })
})
