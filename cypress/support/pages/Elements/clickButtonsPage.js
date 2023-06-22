class clickButtons {
	//Elements obtained from website
	get = {
		doubleClick: () => cy.get('#doubleClickBtn'),
		RightClick: () => cy.get('#rightClickBtn'),
		OnlyClick: () => cy.get('[type="button"]').eq(3),
		Message2Click: () => cy.get('#doubleClickMessage'),
		MessageRightClick: () => cy.get('#rightClickMessage'),
		Message1Click: () => cy.get('#dynamicClickMessage'),
	};

	//Functions or Methods
	PerformDoubleClick() {
		this.get.doubleClick().dblclick(); //obtain the element and double click on it.
	}

	DoRightClick() {
		this.get.RightClick().rightclick(); //Obtain the element and right click on it.
	}

	SoloClick() {
		this.get.OnlyClick().click(); //Obtain the element and just click on it.
	}

	getMessage2Click() {
		return this.get.Message2Click();
	}
	getRightClickMsg() {
		return this.get.MessageRightClick();
	}
	getClickMsg() {
		return this.get.Message1Click();
	}
}

export const clicking = new clickButtons();
