
$(document).ready(function(){
  var male_list =  _.select(students, function(student) {
                         return student.Gender == "M";
                      }); 
  var female_list =  _.select(students, function(student) {
                         return student.Gender == "F";
                      }); 
  $.each(male_list, function(index, male) {
    var res = $('#studentTemplate').tmpl(male)
    res.appendTo('.studentInfo');
  });

});
 
