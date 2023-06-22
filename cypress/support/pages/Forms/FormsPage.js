import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const phoneNum = faker.phone.number('##########');
const email = faker.helpers.unique(faker.internet.email, [firstName, lastName]);
const address = faker.address.streetAddress();

class PracticeForm {
	get = {
		firstNameInput: () => cy.get('#firstName'),
		lastNameInput: () => cy.get('#lastName'),
		emailInput: () => cy.get('#userEmail'),
		genderCheckbox: () => cy.get('[class*="custom-radio"]'),
		gender1: () => cy.get('#gender-radio-1'),
		gender2: () => cy.get('#gender-radio-2'),
		gender3: () => cy.get('#gender-radio-3'),
		phoneNumberInput: () => cy.get('#userNumber'),
		birthDatePicker: () => cy.get('#dateOfBirthInput'),
		calendar: () => cy.get('div[ class= "react-datepicker__month-container" ]'),
		yearPicker: () => cy.get('.react-datepicker__year-select'),
		monthPicker: () => cy.get('.react-datepicker__month-select'),
		dayPicker: () => cy.get('.react-datepicker__day'),
		monthOutside: () => cy.get('.react-datepicker__day--outside-month'),
		selectYear: () => cy.get('select[class*="year-select"]'),
		selectMonth: () => cy.get('select[class*="month-select"]'),
		subject: () => cy.get('[class^="subjects-auto-complete__value-container"]'),
		hobbiesCheckbox1: () => cy.get('#hobbies-checkbox-1'),
		hobbiesCheckbox2: () => cy.get('#hobbies-checkbox-2'),
		hobbiesCheckbox3: () => cy.get('#hobbies-checkbox-3'),
		uploadPicture: () => cy.get('input[type="file"]'),
		currentAddress: () => cy.get('#currentAddress'),
		stateSelect: () => cy.get('#state'),
		citySelect: () => cy.get('#city'),
		submitBtn: () => cy.get('#submit'),
		modalContent: () => cy.get('div[class="modal-content"]'),
		closeBtn: () => cy.get('#closeLargeModal'),
	};
	fillFirstNameRandom() {
		return this.get.firstNameInput().type(firstName);
	}
	fillLastNameRandom() {
		return this.get.lastNameInput().type(lastName);
	}
	fillEmailRandom() {
		return this.get.emailInput().type(email);
	}
	selectGenderRandom() {
		return this.get.genderCheckbox().then(() => {
			let random = Math.floor(Math.random() * 3);

			cy.get('[type="radio"]').eq(random).click({ force: true });
		});
	}
	fillPhoneNumRandom() {
		return this.get.phoneNumberInput().type(phoneNum);
	}
	selectBirthDay() {
		const month = faker.date.month();
		let max = 2100;
		let min = 1900;
		const randomYear = Math.floor(Math.random() * (max - min)) + min;

		cy.get('#dateOfBirthInput').click({ force: true });
		cy.get('.react-datepicker__month-container');
		cy.get('[class^="react-datepicker__header"]');
		cy.get('.react-datepicker__year-select').contains(randomYear).click({ force: true });
		cy.get('.react-datepicker__month-select').select(month);
		cy.get('.react-datepicker__day').then(() => {
			let randomDay = faker.datatype.number({ min: 1, max: 30 });
			cy.get('.react-datepicker__day').eq(randomDay).click();
		});
	}
	fillSubject() {
		this.get.subject().type('Math');
	}
	checkHobbie() {
		this.get.hobbiesCheckbox1().check({ force: true });
	}
	uploadPicture(photo) {
		this.get.uploadPicture().attachFile(photo);
	}
	fillCurrentAddress() {
		this.get.currentAddress().type(address);
	}
	selectState() {
		this.get.stateSelect().click({ force: true });
		// cy.get('#react-select-3-option-1').click();
	}
	selectCity() {
		this.get.citySelect().click({ force: true });
		// cy.get('#react-select-4-option-0').click({ force: true });
	}
	submitBtn() {
		this.get.submitBtn().click({ force: true });
	}
	closeBtn() {
		this.get.closeBtn().click({ force: true });
	}
	popUpMessage() {
		return this.get.modalContent();
	}
}

export const practiceForm = new PracticeForm();
