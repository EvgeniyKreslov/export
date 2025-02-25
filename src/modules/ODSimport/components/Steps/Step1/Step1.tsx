import React from 'react';
import {i18n} from '@universe-platform/sdk';
import {Wizard} from '@universe-platform/uikit';
import {CheckBox, Input, Select} from '../../../ui';
import {inject, observer} from 'mobx-react';
import customStore from '../../../entities/CustomExportStore';

@inject((stores: any) => {
    return {
        ...stores,
        customStore
    };
})
@observer
class Step1 extends React.Component {
    override render () {
        const {
            importRelationsEnabled,
            importClassifications,
            setCheckBox,
            setSelect
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
        } = this.props.customStore;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line no-unsafe-optional-chaining
        const {entityName} = this.props.routerStore?.currentPageComponent?.props?.match?.params;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const entityLabel = this.props.routerStore?.currentPageComponent?.searchStore?.innerColumnsStore?.entity?.displayName?.value?.value;

        return (
            <>
                <Wizard.Navigation allowNext/>
                <Wizard.Content>
                    <Select
                        key='entityName'
                        label={i18n.t('firstStep>dataModelTitle')}
                        options={[
                            {title: entityLabel, value: entityName}
                        ]}
                        onChange={setSelect('entityName')}
                        style={{marginTop: 10}}
                    />
                    <Select
                        key='sourceSystem'
                        label={i18n.t('firstStep>sourceSystemTitle')}
                        options={[
                            {title: 'universe', value: 'universe'}
                        ]}
                        onChange={setSelect('sourceSystem')}
                        style={{marginTop: 10}}
                    />
                    <Input
                        style={{maxWidth: '400'}}
                        label={i18n.t('firstStep>importHandlerTitle')}
                        defaultValue='Базовый импорт ODS'
                        disabled
                    />
                    <CheckBox
                        name='importRelationsEnabled'
                        label={i18n.t('firstStep>tiesImportTitle')}
                        checked={importRelationsEnabled}
                        onChange={setCheckBox}
                        style={{marginTop: 10}}
                    />
                    <CheckBox
                        name='importClassifications'
                        label={i18n.t('firstStep>classificationImportTitle')}
                        checked={importClassifications}
                        onChange={setCheckBox}
                        style={{marginTop: 10}}
                    />
                </Wizard.Content>
                <Wizard.Footer
                    allowNext
                    nextText={i18n.t('navigation>next')}
                    prevText={i18n.t('navigation>prev')}
                    submitText={i18n.t('navigation>submit')}
                />
            </>
        );
    }
}

export default Step1;
