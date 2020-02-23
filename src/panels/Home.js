import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, fetchedUser }) => (
	class Example extends React.Component {

		constructor() {
		  this.state = {
			activePanel: 'list',
			removeList: ['Михаил Андриевский', 'Вадим Дорохов', 'Саша Колобов'],
			draggingList: ['Say', 'Hello', 'To', 'My', 'Little', 'Friend', 'Friend']
		  };
		}
	
		render() {
		  return (
			<View activePanel={this.state.activePanel}>
			  <Panel id="list">
				<PanelHeader>
				  Cell
				</PanelHeader>
				<Group header={<Header mode="secondary">Простейший пример</Header>}>
				  <List>
					<Cell>Пятница</Cell>
					<Cell>Суббота</Cell>
					<Cell>Воскресение</Cell>
				  </List>
				</Group>
				<Group header={<Header mode="secondary">Переходы</Header>}>
				  <List>
					<Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Учетная запись</Cell>
					<Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Основные</Cell>
					<Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Приватность</Cell>
				  </List>
				</Group>
				<Group header={<Header mode="secondary">Индикатор</Header>}>
				  <List>
					<Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="При использовании">Геолокация</Cell>
					<Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Всегда">Автопроигрывание медиа</Cell>
					<Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Выключены">Стикеры</Cell>
				  </List>
				</Group>
				<Group header={<Header mode="secondary">Многострочность</Header>}>
				  <List>
					<Cell multiline>A Series of Unfortunate Events, Archer, Brooklyn Nine-Nine, Doctor Who, Game of Thrones</Cell>
					<Cell multiline>The Avalanches</Cell>
				  </List>
				</Group>
				<Group header={<Header mode="secondary">Подпись</Header>}>
				  <List>
					<Cell description="Depeche Mode">Where’s the Revolution</Cell>
					<Cell description="The Weeknd">I Feel It Coming (Feat. Daft Punk)</Cell>
				  </List>
				</Group>
				<Group header={<Header mode="secondary">Большая ячейка</Header>}>
				  <List>
					<Cell
					  before={<Avatar size={72} />}
					  size="l"
					  description="Друзья в Facebook"
					  asideContent={<Icon24MoreHorizontal />}
					  bottomContent={
						<div style={{ display: 'flex' }}>
						  <Button size="m">Добавить</Button>
						  <Button size="m" mode="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
						</div>
					  }
					>
					  Семён Ефимов</Cell>
					<Cell
					  before={<Avatar size={72} />}
					  size="l"
					  description="29 лет, Санкт-Петербург"
					  asideContent={<Icon24MoreHorizontal />}
					  bottomContent={
						<div style={{ display: 'flex' }}>
						  <Button size="m">Добавить</Button>
						  <Button size="m" mode="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
						</div>
					  }
					>
					  Александр Попов</Cell>
					<Cell
					  before={<Avatar size={72} />}
					  size="l"
					  description="Команда ВКонтакте"
					  asideContent={<Icon24MoreHorizontal />}
					  bottomContent={
						<div style={{ display: 'flex' }}>
						  <Button size="m">Добавить</Button>
						  <Button size="m" mode="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
						</div>
					  }
					>
					  Екатерина Скобейко</Cell>
				  </List>
				</Group>
				<Group header={<Header mode="secondary">Иконки</Header>}>
				  <List>
					<Cell before={<Icon24About />}>Информация</Cell>
					<Cell before={<Icon24Services />}>Сервисы</Cell>
				  </List>
				</Group>
				<Group header={<Header mode="secondary">Чекбоксы</Header>}>
				  <List>
					<Cell selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Артур Стамбульцян</Cell>
					<Cell selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Тимофей Чаптыков</Cell>
					<Cell selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Влад Анесов</Cell>
				  </List>
				</Group>
				{this.state.removeList.length > 0 &&
				  <Group header={<Header mode="secondary">Удаление</Header>}>
					<List>
					  {this.state.removeList.map((item, index) => (
						<Cell key={item} removable onRemove={() => {
						  this.setState({
							removeList: [...this.state.removeList.slice(0, index), ...this.state.removeList.slice(index + 1)]
						  })
						}}>{item}</Cell>
					  ))}
					</List>
				  </Group>
				}
				{this.state.removeList.length > 0 &&
				  <Group header={<Header mode="secondary">Перетаскивание</Header>}>
					<List>
					  {this.state.draggingList.map((item) => (
						<Cell key={item} draggable onDragFinish={({ from, to }) => {
						  const draggingList = [...this.state.draggingList];
						  draggingList.splice(from, 1);
						  draggingList.splice(to, 0, this.state.draggingList[from]);
						  this.setState({ draggingList });
						}}>{item}</Cell>
					  ))}
					</List>
				  </Group>
				}
			  </Panel>
			  <Panel id="nothing">
				  <PanelHeader
					left={
					  <PanelHeaderButton onClick={() => this.setState({ activePanel: 'list' })}>
						{osname === ANDROID ? <Icon24Back/> : <Icon28ChevronBack/>}
					  </PanelHeaderButton>
					}
				  >
					Ничего
				  </PanelHeader>
				<div
				  style={{
					padding: '100px 0',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				  }}
				>
				  <div
					style={{
					  flex: '0 0 auto',
					  color: 'gray',
					  textAlign: 'center'
					}}
				  >
					Тут ничего нет<br />
					<span onClick={() => this.setState({ activePanel: 'list' })} style={{ textDecoration: 'underline' }}>Пошли обратно</span>
				  </div>
				</div>
			  </Panel>
			</View>
		  )
		}
	  }
	
	  <Example />
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;







