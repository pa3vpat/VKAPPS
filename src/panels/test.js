import React from 'react';
import PropTypes from 'prop-types';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { ConfigProvider, Panel, Div , Button , PanelHeader, Footer, View , ScreenSpinner , ModalPage , ModalCard , ModalRoot , ModalPageHeader , HeaderButton
	, List , Cell , CellButton , InfoRow , Progress , Gallery , Counter , Placeholder , Snackbar , Avatar , Group , Separator , Alert
	,PanelHeaderButton,PanelHeaderBack,Switch, Tooltip , Tabs , TabsItem, platform, IOS, ANDROID  } from '@vkontakte/vkui';
    
    import Icon16Done from '@vkontakte/icons/dist/16/done';
    import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';
    import Icon16Search from '@vkontakte/icons/dist/16/search';
    import Icon16Recent from '@vkontakte/icons/dist/16/recent';
    import Icon16Play from '@vkontakte/icons/dist/16/play';
    import Icon16Spinner from '@vkontakte/icons/dist/16/spinner';
    import Icon16Smile from '@vkontakte/icons/dist/16/smile';
    import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
    import Icon24Replay from '@vkontakte/icons/dist/24/replay';
    import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
    import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
    import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
    import Icon24Coins from '@vkontakte/icons/dist/24/coins';
    import Icon24ThumbUp from '@vkontakte/icons/dist/24/thumb_up';
    import Icon24ThumbDown from '@vkontakte/icons/dist/24/thumb_down';
    import Icon24Users from '@vkontakte/icons/dist/24/users';
    import Icon24Linked from '@vkontakte/icons/dist/24/linked';
    import Icon24Gift from '@vkontakte/icons/dist/24/gift';
    import Icon24Report from '@vkontakte/icons/dist/24/report';
    import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
    import Icon56ErrorOutline from '@vkontakte/icons/dist/56/error_outline';
    import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
    import Icon56MarketOutline from '@vkontakte/icons/dist/56/market_outline';
    import Icon56InfoOutline from '@vkontakte/icons/dist/56/info_outline';
    import Icon56EventOutline from '@vkontakte/icons/dist/56/event_outline';
    import Icon56UsersOutline from '@vkontakte/icons/dist/56/users_outline';
    import Icon56NewsfeedOutline from '@vkontakte/icons/dist/56/newsfeed_outline';
import './mur.css';

const osName = platform();

const Test = props => (
    <Panel id={props.id}>
    <PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Swith
		</PanelHeader>
      <Group>
        <Cell asideContent={<Switch />}>
          Комментарии к записям
        </Cell>
        <Cell asideContent={<Switch defaultChecked />}>
          Ссылки
        </Cell>
        <Cell asideContent={<Switch disabled />}>
          Фотоальбомы
        </Cell>
      </Group>
    </Panel>
);

Test.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Test;