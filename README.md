


# Muteni-Bank



## Technological Stack

- Frontend: Angular, Bootstrap
- Language: TypeScript
- Translations: ngx-translate
- Backup Locale: LocalStorage (with Angular service)


## Versions

### Angular CLI: 18.2.12

- Node: 20.18.0
- Package Manager: npm 10.8.2
- OS: win32 x64

## Getting started

To run the project locally, execute these commands:

```bash
cd muteni-bank
npm install
ng serve
```

## Build and Run with docker compose

Open a terminal in angular-project, then run the following command to build and start the container:

```bash
cd muteni-bank
npm install
ng build
docker-compose build
docker-compose up
```

This command will:

- Build the Docker image for muteni-bank project.
- Start the container.
- The application will be available at http://localhost:4200 in your browser.



## Features

- Automatically save the step data to avoid losing it in case the page is reloaded.
- Load this data at startup to allow the user to pick up where they left off.
- Clean the data after form submission to avoid cluttering the LocalStorage.

# Project ScreenShot

### Form Introduction

<img width="70%" alt="Home Introduction" src="https://github.com/mo3taz1919/muteni-bank/blob/e46575d7765758792f1fdc41a00af3028dfaa45c/src/assets/images/home.JPG">


### Step 1 : The deceased Information

<img width="70%" alt="deceased Information" src="https://github.com/mo3taz1919/muteni-bank/blob/e46575d7765758792f1fdc41a00af3028dfaa45c/src/assets/images/step1.JPG">

### Step 2 : Beneficiary information

<img width="70%" alt="Beneficiary information" src="https://github.com/mo3taz1919/muteni-bank/blob/e46575d7765758792f1fdc41a00af3028dfaa45c/src/assets/images/step2.JPG">

### Step 3 : Tax Situation

<img width="70%" alt="Tax Situation" src="https://github.com/mo3taz1919/muteni-bank/blob/e46575d7765758792f1fdc41a00af3028dfaa45c/src/assets/images/step3.JPG">

### Step 4 :  US Person Profile
<img width="70%" alt=" US Person Profile" src="https://github.com/mo3taz1919/muteni-bank/blob/af44c97555ceef80fc0a70b46508846abaa0f377/src/assets/images/step%204.JPG">

### Step 5 : Tax Identification Number 

<img width="70%" alt="Tax Identification Number" src="https://github.com/mo3taz1919/muteni-bank/blob/e46575d7765758792f1fdc41a00af3028dfaa45c/src/assets/images/step5.JPG">

### Summary :

<img width="70%" alt="Summary" src="https://github.com/mo3taz1919/muteni-bank/blob/e46575d7765758792f1fdc41a00af3028dfaa45c/src/assets/images/summary.JPG">

## Confirmation Form Submit

<img width="70%" alt="Confirmation Form Submit" src="https://github.com/mo3taz1919/muteni-bank/blob/e46575d7765758792f1fdc41a00af3028dfaa45c/src/assets/images/confirmation.JPG">