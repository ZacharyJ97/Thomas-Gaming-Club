using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Thomas_Gaming_Club.Models;

namespace Thomas_Gaming_Club.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult Index()
        {
            return View();
        }

        [HttpGet]
        public ViewResult About()
        {
            return View();
        }
        [HttpGet]
        public ViewResult Contact()
        {
            return View();
        }

        [HttpGet]
        public ViewResult AllContacts()
        {
            return View();
        }

        /* [HttpPost]
         public ActionResult Contact(Contact inquiry)
         {
             if (ModelState.IsValid)
             {
                 // TODO: Email response to the party organizer
                 return View("ContactSummary", inquiry);
             }
             else
             {
                 // there is a validation error
                 return View();
             }
         }*/

        [HttpPost]
        public ActionResult Contact(List<Contact> data)
        {
            data = this.makeContacts();
            foreach (Contact c in data)
            {
                if (ModelState.IsValid)
                {
                    // TODO: Email response to the party organizer
                    //return View("ContactSummary", inquiry);
                    View("ContactSummary", c);
                }
                else
                {
                    // there is a validation error
                    return View();
                }
            }
           return View("ContactSummary");
        }

        private List<Contact> makeContacts()
        {
            List<Contact> contacts = new List<Contact>
            {
                new Contact
                {
                    PreferredContact = "The Events Coordinator",
                    PreferredTitle = "Student",
                    FirstName = "Bubbles",
                    LastName = "McGee",
                    Email = "b.mcgee@email.com",
                    Phone = "2075555555",
                    Message = "Can I be the officer of memes for the club?"
                },

                new Contact
                {
                    PreferredContact = "The Officer of Communication",
                    PreferredTitle = "Staff",
                    FirstName = "Eric",
                    LastName = "Idle",
                    Email = "fleshwound@circus.com",
                    Phone = "",
                    Message = "What is the airspeed velocity of an unladen swallow?"
                },

                new Contact
                {
                    PreferredContact = "The Officer of Operations",
                    PreferredTitle = "Student",
                    FirstName = "Barron",
                    LastName = "Trump",
                    Email = "notmydad@gov.us",
                    Phone = "",
                    Message = "Help me."
                },

                new Contact
                {
                    PreferredContact = "The Officer of Operations",
                    PreferredTitle = "Prospective Student",
                    FirstName = "David",
                    LastName = "Sugden",
                    Email = "its4@thomas.edu",
                    Phone = "",
                    Message = "Can I please be a part of your super awesome club?"
                }

            };
            return contacts;

        }

    }
}