import Button from '../src/components/VButton';

export default {
    title: 'VButton',
};

export const normalButton = () => ({
    components: { Button },
    template: '<Button text="Salvar"/>',
});
