# Medikit
## How to run 
1. Clone the repo to your local system

    ```git clone https://github.com/manan2110/MedGuide.git ```
2. Create a virtual environment. You can use this [link](https://docs.python.org/3/library/venv.html) for reference.

    ``` python -m venv venv ```
3. Activate your virtual environment using : 
    
    ```venv/Scripts/activate``` 
    
    Here venv is the name of virtual environment.

4. Install all the requirements required to run the project : 
    
    ```pip install -r requirements.txt```

5. Run the django server : 
    
    ```python manage.py runserver```

6. In another terminal change directory to server :

    ``` cd server ``` 
7. Install node module

    ```npm i```
8. Start the VC server

    ```npm start ```

6. In another terminal change directory to frontend :

    ``` cd frontend ``` 
7. Install node module

    ```npm i```
8. Start react server :
 
    ```npm start```
9. You can view the webapp by going to the [localhost:3000](http://127.0.0.1:3000/) on you web browser.

## Documents 
You can find the [api guide](https://github.com/manan2110/MedGuide/tree/master/api) in the api folder.

You can find the [frontend guide](https://github.com/manan2110/MedGuide/tree/master/frontend) in the frontend folder.
## Inspiration
During covid-19 people were under a lot of mental stress because they could not access medical facilities, which include access to medicines, consultancy and much more as freely as they could before. Also, previously doctors prescribed medicines without the knowledge of availability and cost of them near the patient which caused inconvenience to many people.

## What it does
Our App allows the patient  to consult with the doctor regarding the medicines availability and prices of medicine nearby the patient, and discuss the total cost of the prescription with the doctor. ( So that doctor can suggest better alternative ).

## How we built it
- Backend : **Django**
- Frontend : **React**
- VC Server : **Node Js**
- Nearby Api : [**mapmyindia**](https://www.mapmyindia.com/api/advanced-maps/doc/nearby-api#/)

## Challenges we ran into
- ### Using django asgi :
    - Most api(s) in django use django-rest-framework which does not support async, so we have do all its work our self.
    - Using django ORM async.
    - Using djnago sessions async.
    - Using django auth async.

- ### Integrating django with React :
    - using the same session for requests in React.
    - bypassing cors in django.
    - making react use django csrf tokens.
    - using url encoded data in React.

- ### Using mapmyindia api :
    - nearby api had a small limit for free use.
    - using their token based auth.

- ### Using Sawo :
    - Using sawo auth in django and react.
    - Using sawo integration documentation.

## Accomplishments that we're proud of
We are proud that we were able to address an important problem and build a product that could help solve it.

## What we learned
We learned from every challenged we faced.
- Using django asgi
- Integrating django with React
- Using mapmyindia api
- Using Sawo 

## What's next for MedGuide
- Adding delivery feature 
- Adding real time driver track
- Categorising medicines
- Adding OAuth2
- Integrating Google Maps
- Adding chat to VC
- Read prescription from image

 ### Contributors :
<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/manan2110">
            <img src="https://avatars.githubusercontent.com/u/55996661?v=4" width="100;" alt="manan2110"/>
            <br />
            <sub><b>Manan Gyanchandani</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Priyanka7011">
            <img src="https://avatars.githubusercontent.com/u/54627940?v=4" width="100;" alt="Priyanka7011"/>
            <br />
            <sub><b>Priyanka Kumari</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Ayush6602">
            <img src="https://avatars.githubusercontent.com/u/54628493?v=4" width="100;" alt="Ayush6602"/>
            <br />
            <sub><b>Ayush Das</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/belikeamitesh">
            <img src="https://avatars.githubusercontent.com/u/56907437?v=4" width="100;" alt="belikeamitesh"/>
            <br />
            <sub><b>Belikeamitesh</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors -end -->
