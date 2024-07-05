export function getTitle(pathname) {
    switch (pathname) {
      case "/":
        return "HRMS - Unleashing Transparency in Employee Management";
      case "/login":
        return "Login | Manage Empoyees and Hr tasks";
      case "/signup":
        return "Signup - Register & manage your employees";
      case "/leave":
        return "Leave - Manage leaves of your employees";
      default:
        return "orpect,Orpect, keywords";
    }
  }
  
  export function getDescription(pathname) {
    switch (pathname) {
      case "/":
        return "Discover a new era of employee reviews with ORPECT. Enhance workplace transparency, make informed hiring decisions, and foster continuous improvement. ";
      case "/login":
        return "Revolutionize your HR management with ORPECT - a platform dedicated to transparent employee reviews and insightful HR analytics. Improve your hiring strategy, foster a culture of improvement, and ensure smarter decision-making for your organization today.";
      case "/signup":
        return "Need assistance or have questions about ORPECT? Reach out to our customer support team who are ready to assist you. ";
      case "/leave":
        return " Learn more about ORPECT's mission to promote transparent evaluations and its dedicated team striving to create a productive workspace for all. ";
      default:
        return "orpect,Orpect, keywords";
    }
  }
  
  export function getKeywords(pathname) {
    switch (pathname) {
      case "/":
        return "home, website, keywords";
      case "/login":
        return "login, account, keywords";
      default:
        return "orpect,Orpect, keywords";
    }
  }
  