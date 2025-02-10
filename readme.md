# JobHunting Platform detailing 

JobHunt is a MERN (MongoDB, Express, React, Node.js) stack application that helps users search, apply, and track job opportunities. The platform aims to streamline the job search process by providing a user-friendly interface for job seekers to manage applications and recruiters to post job openings.

## Adding Workflow Project:
![diagram-export-2-10-2025-4_50_24-PM](https://github.com/user-attachments/assets/d9c9712c-2bac-42e2-9674-55b701f2dc1c)


### Technology Used:
- React
- React-redux ,Redux-toolkit
- react-router dom
- react-Toaster
- express
- cookies-parser
- dotenv  -dotenv.config({})
- cors | path
- Cloudinary upload
- bcrypt | bcrypt.js
- Multer middlware
- MongoDB -- its queries working 
- tailwindCSS and Sadcn UI
### Routing Path :
### User Routes
- `/`  - Landing page of the application.
- `/login`  - User login page for authentication.
- `/signup`  - Page for user registration/sign-up.
- `/jobs`  - Displays the list of job opportunities.
- `/description/:id`  - Shows detailed information about a specific job identified by its ID.
- `/browse`  - Page for browsing through jobs or other available resources.
- `/profile`  - Displays the user's profile details and settings.
---

### Admin Routes
**Company Management**

- `/admin/companies`  - Manage the list of companies.
- `/admin/companies/create`  - Create a new company record.
- `/admin/companies/:id`  - View or edit details of a specific company identified by its ID.
**Job Management**

- `/admin/jobs`  - Manage all job postings in the system.
- `/admin/jobs/create`  - Create or post a new job listing.
- `/admin/jobs/:id/applicants`  - View the list of applicants for a specific job identified by its ID.
---

### Redux
- combineReducer
- ConfigureStore
- Slice --auth,application,job,company
- Redux-persist -- storage, presist store, presist reducer
using Slice and useDispatch as taking in Slice in part

1. `useGetCompanyById`  -> at `GET${COMPANY_API_END_POINT}/get/${companyId}`  --- `companySlice`  --- `singleCompany` 
2. `useGetAllJobs`  -> at 
`GET ${JOB_API_END_POINT}/get?keyword=${searchedQuery}`  --- `jobSlice`  --- `allJobs` 

3 . `useGetAllCompanies`  -> at `GET ${COMPANY_API_END_POINT}/get`  --- `companySlice`  --- `companies` 

4 . `useGetAppliedJobs`  -> at `GET ${APPLICATION_API_END_POINT}/get`  --- `jobSlice`  --- `allAppliedJobs` 

5 . `useGetAllAdminJobs`  -> at `GET ${JOB_API_END_POINT}/getadminjobs`  --- `jobSlice`  --- `allAdminJobs` 



**Cors constent like as working on URI**

```
export const USER_API_END_POINT="https://jobhunt-platform.onrender.com/api/v1/user";
export const JOB_API_END_POINT="https://jobhunt-platform.onrender.com/api/v1/job";
export const APPLICATION_API_END_POINT="https://jobhunt-platform.onrender.com/api/v1/application";
export const COMPANY_API_END_POINT="https://jobhunt-platform.onrender.com/api/v1/company";
```
---

### MVC pattern :: what is it ? how its works? 
-- it is software archuture that Clear structure, easier debugging, parallel development,

- model -handling data and logic
- view - representing  UI and interaction
- controller -manage interaction beetween model and view
**Models :  creates diagram**

Views: all frontend composed in. dist. directory and path embbed in index.js backend folder

**Controllers :**

- **userComtoller **
    - register post 
        - req.body
        - req.file ->getfileurl(file) ->cloudinary.uploader.upload(fileUri.content);
        - already exist check
        - hashed password --bcrypt
        - user.create else return user
    -  login get
        - req.body
        - bcrypt password matching 
        - checking Role also
        - creating Jwt TOken as  stored in local storage
        - cookies set
    - logout get
        - erase token from local storage
    - updateProfile -post
        - req.body
        - req.file ->getfileuri(format of file correct) ->cloudinary working 
        - skill should be trimmed
        - now,find user by req.id
        - update user all info
        - cloudinary resume -- updating  IMPORTANT
        - save user and return
- company controller 
    - register company
        - req.body --company name 
        - check already present
        - save company-name,userId-adminId
    - getingcompany
        - fetching all company with login user -admin logined
    - getCompanybyID
        - specific company data fetch as all about company
    - updatecompany
        - specific company detail updateing with req.body and req.file -cloudinary
- job controller
    - postjob
        - create a job -employees requirement for specific a company by adminID user 
    - getjob
        - userID-student query/search for job as filter apply 
        - query matches with REGX on MONGODB with company name
    - getjobbyID
        - getting detail of specific jobID
    - getadminjob
        - list of job created by adminId 
- application controller
    - applyJob
        - applying in job wtih specific jobid & userID
        - jobID not presnet check and 
        - db checking already applyed on that jopID
        - create jobApllication with userID & jobID then save it
    - getAppliedJob
        - listing of all applied job with by student specific userID
    - getApplicants
        - listing of all applicants on specific jobId and only by adminID user check that create that specific jobID. 
        - meant. jobId created by adminID that only check listing. of applicant 
    - updateStatus 
        - updating application by its ID by admin ID user --??
### Middleware:
-  isAuthenticated
- multer
**Multer : its using in file sync. working **

**Utils  :: cloundinary,dbconnect,datafileuri**

## Connection frontend and backend :
```
//using frontend directory 
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
```
path directory decide there::

## **Installation Guide**
1. **Clone the repository:**`﻿git clone [﻿github.com/vikasutf8/JobHunt-Platform](https://github.com/vikasutf8/JobHunt-Platform)` 
2. **Install dependencies:**
    1. For the backend: `﻿cd backend` `﻿npm install` 
     b. For the frontend: `﻿cd frontend` `﻿npm install` 

**Set up environment variables:**

- Create a `.env`  file in the backend directory with the following:
```
PORT=5000  
CLIENT_URL =<frontent.url>
MONGO_URI=<Your MongoDB Connection String>  
JWT_SECRET=<Your JWT Secret>  
CLOUDINARY_NAME=<Your Cloudinary Name>  
CLOUDINARY_API_KEY=<Your API Key>  
CLOUDINARY_API_SECRET=<Your API Secret>
```
### Deployed at Render . [﻿jobhunt-platform.onrender.com/](https://jobhunt-platform.onrender.com/) 


