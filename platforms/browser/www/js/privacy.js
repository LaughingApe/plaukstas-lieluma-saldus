function revokeConsent(){
    localStorage.removeItem("approvedCookies");
    window.location = "index.html";
}
$(document).ready(function(){
    $("#revokeConsentBtn").on("touch click", revokeConsent);
});
