#JobHunting Platform
JobHunt is a MERN (MongoDB, Express, React, Node.js) stack application that helps users search, apply, and track job opportunities. The platform aims to streamline the job search process by providing a user-friendly interface for job seekers to manage applications and recruiters to post job openings.

### Technology Used in detial preview :
- React,
- React-redux ,Redux-toolkit
- react-router dom
- react-Toaster




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




## Features
- **User Registration & Authentication**: Secure user registration and login using JWT.
- **Job Posting**: Recruiters can create and manage job posts.
- **Job Applications**: Users can apply for jobs and track application status.
- **Job Search**: Search and filter job postings by keywords, location, and job type.
- **Dashboard**: Separate dashboards for job seekers and recruiters to manage jobs and applications.
