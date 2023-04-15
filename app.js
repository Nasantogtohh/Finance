//Shuud gazar deeree ajillana.Anonymous funct dotor zaralsan huwisagch ruu gadnaas handaj cadahgui.
//Ogogldin daldlalt moduuluudin codyg hoorond n holihgun tuld
//Dotor n huwisagch zarlwal window obectod  zarlgdna
//closure gedeg n gadnah functyhaa huwisagchid handah
//Degetstei ajillah controller
var uiController = (function () {})();
//Sanhuutee ajillah controller
var financeController = (function () {})();

//Ehni 2 moduluudyg holboj oghoor,mon busad nemelt uildel
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1.Oruulah ogogdlyg beldetsees olj awna
    //2.Olj awsan ogogdluudee sanhuugin controllert damjuulh tend hadgalna.
    //3.Olj awsan ogogdluudee web deer tohiroh hesegt grgana.
    //4.Tosowiig tootsoolno.
    //5.Etssiin uldegdel,tootsoog delgetsend gargana.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    //Deer uyin browser deer ajillahin tuld event.which==13
    if (event.keyCode === 13 || event.which == 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
