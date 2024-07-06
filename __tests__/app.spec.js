import {mount} from '@vue/test-utils';
import App from '../src/components/ColorPicker.vue';

describe('color_picker', () => {
    let wrapper, selectedColor, colorOptions;

    const getByTestId = (wrapper, id) => {
        return wrapper.find(`[data-testid="${id}"]`)
    }

    const IDS = {
        SELECTED_COLOR: 'selectedColor',
        COLOR_PICKER: 'colorPickerOptions'
    }

    const mountApp = (colorPickerOptions, initialSelectedColor) => {
        wrapper = mount(App, {
            props: {
                colorPickerOptions,
                initialSelectedColor
            }
        });
        selectedColor = getByTestId(wrapper, IDS.SELECTED_COLOR);
        colorOptions = getByTestId(wrapper, IDS.COLOR_PICKER);
    }

    function testComponentState(colors, initialSelectedColor) {
        mountApp(colors, initialSelectedColor);
        expect(selectedColor.element.style.backgroundColor).toEqual(initialSelectedColor)
        const colorOptionsList = colorOptions.findAll('.color-box')
        expect(colorOptionsList.length).toEqual(colors.length)
        colorOptionsList.forEach((colorOption, index) => {
            expect(colorOptionsList[index].element.style.backgroundColor).toEqual(colors[index]);
        });
        return {colorOptionsList}
    }

    it('initial UI is rendered as expected', () => {
        const colors = ['yellow', 'green', 'red', 'blue', 'white'];
        const initialSelectedColor = 'black';
        testComponentState(colors, initialSelectedColor);
    });

    it('click on color 1 changes the canvas color', async () => {
        const colors = ['olive', 'purple', 'orange', 'black', 'yellow', 'lime'];
        const initialSelectedColor = 'red';
        const {colorOptionsList} = testComponentState(colors, initialSelectedColor);
        const clickIndex = 0;
        await colorOptionsList[clickIndex].trigger('click');
        expect(selectedColor.element.style.backgroundColor).toEqual(colors[clickIndex])
    });

    it('click on color 2 changes the canvas color', async () => {
        const colors = ['olive', 'purple', 'orange', 'black', 'yellow', 'lime'];
        const initialSelectedColor = 'red';
        const {colorOptionsList} = testComponentState(colors, initialSelectedColor);
        const clickIndex = 1;
        await colorOptionsList[clickIndex].trigger('click');
        expect(selectedColor.element.style.backgroundColor).toEqual(colors[clickIndex])
    });

    it('click on color 3 changes the canvas color', async () => {
        const colors = ['olive', 'purple', 'orange', 'black', 'yellow', 'lime'];
        const initialSelectedColor = 'red';
        const {colorOptionsList} = testComponentState(colors, initialSelectedColor);
        const clickIndex = 2;
        await colorOptionsList[clickIndex].trigger('click');
        expect(selectedColor.element.style.backgroundColor).toEqual(colors[clickIndex])
    });

    it('click on color 4 changes the canvas color', async () => {
        const colors = ['olive', 'purple', 'orange', 'black', 'yellow', 'lime'];
        const initialSelectedColor = 'red';
        const {colorOptionsList} = testComponentState(colors, initialSelectedColor);
        const clickIndex = 3;
        await colorOptionsList[clickIndex].trigger('click');
        expect(selectedColor.element.style.backgroundColor).toEqual(colors[clickIndex])
    });

    it('click on color 5 changes the canvas color', async () => {
        const colors = ['olive', 'purple', 'orange', 'black', 'yellow', 'lime'];
        const initialSelectedColor = 'red';
        const {colorOptionsList} = testComponentState(colors, initialSelectedColor);
        const clickIndex = 4;
        await colorOptionsList[clickIndex].trigger('click');
        expect(selectedColor.element.style.backgroundColor).toEqual(colors[clickIndex])
    });

    it('click on color 6 changes the canvas color', async () => {
        const colors = ['olive', 'purple', 'orange', 'black', 'yellow', 'lime'];
        const initialSelectedColor = 'red';
        const {colorOptionsList} = testComponentState(colors, initialSelectedColor);
        const clickIndex = 5;
        await colorOptionsList[clickIndex].trigger('click');
        expect(selectedColor.element.style.backgroundColor).toEqual(colors[clickIndex])
    });
});
