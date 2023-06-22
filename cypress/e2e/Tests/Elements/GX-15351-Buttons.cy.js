import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { clicking } from '@pages/Elements/clickButtonsPage';

describe('GX-15351 | ToolsQA | Elements | Buttons', () => {
	beforeEach('User should visit the page Elements/Buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contains', 'button');
	});

	it('15358 | TC1:  Validate “Double Click” button is clicked', () => {
		clicking.PerformDoubleClick();
		clicking.getMessage2Click().should('have.text', 'You have done a double click');
	});

	it('15358 | TC2:  Validate  “Right Click” button is clicked', () => {
		clicking.DoRightClick();
		clicking.getRightClickMsg().should('have.text', 'You have done a right click');
	});

	it('15358 | TC3:  Validate  “Click” button is clicked', () => {
		clicking.SoloClick();
		clicking.getClickMsg().should('have.text', 'You have done a dynamic click');
	});
});
