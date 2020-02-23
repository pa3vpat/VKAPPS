import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';


import './Mur.css';

const osName = platform();

const Test = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Test
		</PanelHeader>
		<Panel separator={false} id="panel2">
            <PanelHeaderSimple
              left={<PanelHeaderBack onClick={() => this.setState({ mainPanel: 'panel1' })} />}
              addon={<PanelHeaderButton onClick={() => this.setState({ mainPanel: 'panel1' })}>Назад</PanelHeaderButton>}
              right={<PanelHeaderButton><Icon28PictureOutline/></PanelHeaderButton>}
            >
              Вторая панель
            </PanelHeaderSimple>
            <Group>
              <CellButton onClick={ () => this.setState({ mainPanel: 'panel3' }) }>
                Несколько иконок
              </CellButton>
            </Group>
          </Panel>
          <Panel separator={false} id="panel3">
            <PanelHeaderSimple
              left={<PanelHeaderBack onClick={() => this.setState({ mainPanel: 'panel2' })}/>}
              addon={<PanelHeaderButton onClick={() => this.setState({ mainPanel: 'panel2' })}>Назад</PanelHeaderButton>}
              right={
                <React.Fragment>
                  <PanelHeaderButton><Icon28SettingsOutline/></PanelHeaderButton>
                  <PanelHeaderButton><Icon28Notifications/></PanelHeaderButton>
                </React.Fragment>
              }
            >
              Две иконки
            </PanelHeaderSimple>
            <Group>
              <CellButton onClick={ () => this.setState({ activeView: 'modal' }) }>
                Модальное окно
              </CellButton>
            </Group>
          </Panel>
	</Panel>
);

Test.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Test;