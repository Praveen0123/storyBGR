$('#welcome_tour').click(function(){
  
  tour.restart();
});

// Instance the tour
var tour = new Tour({
  steps: [
    {
      element: "#quick",
      title: "Quick Start",
      content: "This feature allows the user to quickly get started with the application. It provides a step by step direction for conducting and processing the audits."
    },
  {
    element: "#dashboard",
    title: "Dashboard",
    content: "Dashboard provides an overview of completed, scheduled and active audits. Summary of various upcoming and overdue audits can be viewed from this section along with the graphical representation showing hotel and department wise trends."
  },
  {
    element: "#checklist",
    title: "Checklist",
    content: "The user can configure checklists for an audit from this module."
  },
  {
    element: "#audits",
    title: "Audits",
    content: "The user can schedule and manage audits from here. Audit reports can also be viewed and downloaded from here."
  },
  {
    element: "#tickets",
    title: "Tickets",
    content: "The user can raise and assign tickets with an ability to track their progress."
  },
  {
    element: "#admin",
    title: "Admin",
    content: "User details and assignments can be managed from this section."
  },
  {
    element: "#master",
    title: "Master",
    content: "The user can manage master data for departments, sections and subsections from this module."
  }
  
],
backdrop: true,
storage: false,
redirect: true,

});
tour.init();