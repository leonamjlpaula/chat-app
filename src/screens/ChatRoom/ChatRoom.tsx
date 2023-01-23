import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import ChevronLeftSVG from '@app/assets/images/chevron-left.svg';
import { ChatMessageComponent, SendMessageInput } from '@app/components';

import {
    ActiveNowContainer,
    ActiveNowIndicator,
    ActiveNowTitle,
    BackButtonContainer,
    BackButtonTouchable,
    ChatContainer,
    ChatName,
    Header,
    Separator,
} from './styles';

const mockChat = {
    chatName: 'Kevin Malone',
};

const ChatRoom = () => {
    const [chat, setChat] = useState(mockChat);

    const handleOnBackPress = () => {};

    const handleSendMessage = (message: string) => {
        console.log(message);
    };

    return (
        <ChatContainer>
            <Header>
                <BackButtonContainer>
                    <BackButtonTouchable onPress={handleOnBackPress}>
                        <ChevronLeftSVG />
                    </BackButtonTouchable>
                </BackButtonContainer>
                <ChatName>{chat.chatName}</ChatName>
                <ActiveNowContainer>
                    <ActiveNowIndicator />
                    <ActiveNowTitle>Active Now</ActiveNowTitle>
                </ActiveNowContainer>
            </Header>
            <Separator />
            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                data={mockMessages}
                renderItem={({ item }) => <ChatMessageComponent {...item} />}
                keyExtractor={item => item.id + 'id'}
            />
            <Separator />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SendMessageInput
                    placeholder="Type a message"
                    onSend={handleSendMessage}
                    returnKeyType="send"
                />
            </KeyboardAvoidingView>
        </ChatContainer>
    );
};

export default ChatRoom;

const mockMessages = [
    {
        id: '9f0d3bd5-b9b5-4bc4-85cd-0d67c8a4097f',
        displayName: 'Prue Plain',
        content: 'Dilation of Right Innominate Vein, Open Approach',
        avatarURL:
            'https://robohash.org/quisblanditiisculpa.png?size=50x50&set=set1',
        createdAt: '8/19/2022',
    },
    {
        id: '661df1da-1c14-44b9-931b-1efba6ef6f94',
        displayName: 'Barbara-anne Duquesnay',
        content: 'Excision of Left Knee Region, Perc Endo Approach, Diagn',
        avatarURL:
            'https://robohash.org/fugainciduntomnis.png?size=50x50&set=set1',
        createdAt: '11/25/2022',
    },
    {
        id: '16ca50e9-fdb6-46a4-a1ca-9fcd4a149629',
        displayName: 'Bartram MacQueen',
        content: 'Instru Swal/Oral Funct Assessment using Swallow Equipment',
        avatarURL: 'https://robohash.org/quoestquas.png?size=50x50&set=set1',
        createdAt: '7/2/2022',
    },
    {
        id: '610aa8e9-7fa6-4057-93cc-a5d29303a3b3',
        displayName: 'Meryl Kilborn',
        content: 'Replace of L Sphenoid Bone with Nonaut Sub, Perc Approach',
        avatarURL:
            'https://robohash.org/explicabomagnivoluptatem.png?size=50x50&set=set1',
        createdAt: '12/18/2022',
    },
    {
        id: '19dcc94b-4811-450f-ba4b-30293941b795',
        displayName: 'Rafferty Dunlop',
        content: 'Occlusion of Up Esophag with Extralum Dev, Perc Approach',
        avatarURL:
            'https://robohash.org/sequiconsecteturut.png?size=50x50&set=set1',
        createdAt: '10/11/2022',
    },
    {
        id: '83236278-33a8-45dd-a00b-81aa098f7965',
        displayName: 'Tatiana Tale',
        content: 'Destruction of Left Orbit, Open Approach',
        avatarURL:
            'https://robohash.org/veritatistemporibuseos.png?size=50x50&set=set1',
        createdAt: '6/5/2022',
    },
    {
        id: 'c419108a-844f-4e42-ab79-18597022d9bf',
        displayName: 'Lizbeth McGonagle',
        content: 'Inspection of Vagina and Cul-de-sac, Open Approach',
        avatarURL: 'https://robohash.org/essequosit.png?size=50x50&set=set1',
        createdAt: '10/27/2022',
    },
    {
        id: '48bd9e4c-4d56-464b-ad96-45ad31b4b25e',
        displayName: 'Larry Dermott',
        content: 'Remove of Nonaut Sub from R Finger Phalanx Jt, Open Approach',
        avatarURL:
            'https://robohash.org/praesentiumfugitearum.png?size=50x50&set=set1',
        createdAt: '2/2/2022',
    },
    {
        id: 'fc23396b-a990-4e5e-854e-57db507e3ea3',
        displayName: 'Teodor MacCarter',
        content: 'Extirpation of Matter from Access Pancr Duct, Perc Approach',
        avatarURL:
            'https://robohash.org/dignissimosrerumquia.png?size=50x50&set=set1',
        createdAt: '12/11/2022',
    },
    {
        id: '551c3f26-886c-4480-b00f-d8d5438ffaba',
        displayName: 'Georg Garretts',
        content: 'Transfer Accessory Nerve to Accessory Nerve, Open Approach',
        avatarURL: 'https://robohash.org/voluptaseta.png?size=50x50&set=set1',
        createdAt: '6/9/2022',
    },
    {
        id: '15f4e00b-5ac0-4117-8f8b-2250d8d9af23',
        displayName: 'Beatrice Da Costa',
        content: 'Revision of Drainage Device in Fallopian Tube, Perc Approach',
        avatarURL: 'https://robohash.org/cumqueeasit.png?size=50x50&set=set1',
        createdAt: '8/20/2022',
    },
    {
        id: '9c9e89b6-4498-4ada-a1b3-28779252d532',
        displayName: 'Christal Dufoure',
        content: 'Supplement Hymen with Autol Sub, Via Opening',
        avatarURL:
            'https://robohash.org/teneturdoloreatque.png?size=50x50&set=set1',
        createdAt: '2/10/2022',
    },
    {
        id: '5f393d81-e290-4d13-8347-5d8bb1895b8c',
        displayName: 'Rolf Ripsher',
        content: 'Insert Infusion Dev in R Ext Iliac Art, Perc Endo',
        avatarURL:
            'https://robohash.org/quidemnequedicta.png?size=50x50&set=set1',
        createdAt: '11/19/2022',
    },
    {
        id: '3b5450a4-52ae-448c-a63a-4182ce62d416',
        displayName: 'Alley Hubbocks',
        content: 'Restriction of Thorax Lymph with Intralum Dev, Perc Approach',
        avatarURL:
            'https://robohash.org/voluptatemquisqui.png?size=50x50&set=set1',
        createdAt: '10/27/2022',
    },
    {
        id: '0e5f2fd9-7235-429d-8cfd-5e0dc6ff598c',
        displayName: 'Celine Guyot',
        content: 'Removal of Synth Sub from Spinal Canal, Perc Endo Approach',
        avatarURL: 'https://robohash.org/sequitotamqui.png?size=50x50&set=set1',
        createdAt: '6/2/2022',
    },
    {
        id: '138eadb4-5b2b-45bf-ae44-9e841c218be6',
        displayName: 'Ruthi Anderl',
        content: 'Reposition Cecum, Via Natural or Artificial Opening',
        avatarURL:
            'https://robohash.org/temporibusrepudiandaenon.png?size=50x50&set=set1',
        createdAt: '5/25/2022',
    },
    {
        id: '5ee343ec-a22f-493c-b2ed-1c971b644165',
        displayName: 'Budd Tiddy',
        content: 'LDR Brachytherapy of Thorax Lymph using Palladium 103',
        avatarURL:
            'https://robohash.org/quofugitsapiente.png?size=50x50&set=set1',
        createdAt: '2/16/2022',
    },
    {
        id: '92690853-b9a9-491f-b18d-8af2782f48ed',
        displayName: 'Genovera Crudgington',
        content: 'Monitoring of Venous Pressure, Portal, Percutaneous Approach',
        avatarURL:
            'https://robohash.org/dolorsequiinventore.png?size=50x50&set=set1',
        createdAt: '9/20/2022',
    },
    {
        id: 'b5269d45-2b78-4ef0-8af0-4496feea1e25',
        displayName: 'Moira Weedon',
        content: 'Insert Card Rsync Defib Puls Gen in Chest Subcu/Fascia, Open',
        avatarURL:
            'https://robohash.org/laboriosamadipisciquis.png?size=50x50&set=set1',
        createdAt: '5/12/2022',
    },
    {
        id: 'c82da2b9-14a1-48d5-ace6-0cc9f2f06d39',
        displayName: 'Darcy Brownscombe',
        content: 'Resection of Carina, Open Approach',
        avatarURL:
            'https://robohash.org/utsuscipitinventore.png?size=50x50&set=set1',
        createdAt: '7/15/2022',
    },
];
