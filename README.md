# HospitalApi

We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients

There can be 2 types of Users
- Doctors
- Patients

Doctors can log in

Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app using phone number, if the patient already exists, just
return the patient info in the API
- After the checkup, create a Report

Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register → register a patient using phoneno 
- /patients/:id/create_report → take the doctor data from jwt and patient data from params and create a report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
