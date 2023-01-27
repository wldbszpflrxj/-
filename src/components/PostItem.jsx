import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const PostItem = ({ id, post, setPostList, setIsToast }) => {
    const { title, contents } = post;
    const handleDelPost = () => {
        setPostList(prev => prev.filter((_, idx) => idx !== id));
        setIsToast({message: '포스트가 삭제되었습니다.', isActive: true});
    }
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                    {title}
                </Heading>
                <Text pt='2' fontSize='sm'>
                    {contents}
                </Text>
            </Box>
            <Spacer />
            <ButtonGroup>
                <Button colorScheme="gray" size="sm" onClick={handleDelPost}>삭제</Button>
            </ButtonGroup>
        </Flex>
    );
};

export default PostItem;