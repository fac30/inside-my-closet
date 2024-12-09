import ChatBotContainer from "./chatbot/ChatBotContainer"
import TalksContainer from "./TalksContainer"
import { useState } from "react"
import { VStack, Center } from "native-base";
import ThriftingComponent from "./ThriftingComponent"
import UpscalingComponent from "./UpscalingComponent"
import ClothingSwaps from "./ClothingSwaps"
import { theme } from "../../utils/native-base-config";
import ButtonComponent from "../common/ButtonComponent";

type ComponentType = 'talks' | 'chat' | 'clothes' | 'upscaling' | 'thrifting';

interface ButtonConfig {
    id: ComponentType;
    label: string;
}

export default function EcoAdviceComponent() {
    const [selectedComponent, setSelectedComponent] = useState<ComponentType | null>(null);
    
    const buttons: ButtonConfig[] = [
        { id: 'clothes', label: 'Clothes Swaps' },
        { id: 'upscaling', label: 'Upscaling' },
        { id: 'thrifting', label: 'Thrifting' },
        { id: 'talks', label: 'Talks' },
        { id: 'chat', label: 'Have A Question ?' },
    ];

    return (
        <>
            {!selectedComponent && (
                <Center w="100%" bg={theme.colors.primary[50]}>
                    <VStack space={8} w="90%" maxW="300px">
                        {buttons.map((button) => (
                            <ButtonComponent 
                                key={button.id}
                                onPress={() => setSelectedComponent(button.id)}
                                label={button.label}
                            />
                        ))}
                    </VStack>
                </Center>
            )}
            {selectedComponent === 'talks' && <TalksContainer />}
            {selectedComponent === 'chat' && <ChatBotContainer />}
            {selectedComponent === 'clothes' && <ClothingSwaps />}
            {selectedComponent === 'upscaling' && <UpscalingComponent />}
            {selectedComponent === 'thrifting' && <ThriftingComponent />}
        </>
    )
}