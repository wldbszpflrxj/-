import React from 'react';
import { useState, useEffect } from 'react';
import PostItem from './PostItem';
import PostInput from './PostInput';
import { Box, Card, CardBody, Flex, Heading, Stack, StackDivider, useToast } from '@chakra-ui/react';

const PostContainer = () => {
    const [postList, setPostList] = useState([
        {
            title: '제목입니다.',
            contents: '내용입니다.'
        },
        {
            title: '제목입니다.',
            contents: '내용입니다.'
        },
    ]);
    const [ isToast, setIsToast] = useState({
        message: '',
        isActive: false
    });
    const toast = useToast();

    useEffect(() => {
        isToast.message !== '' &&
            isToast.isActive &&
            toast({ description: isToast.message });
    }, [toast, isToast, setIsToast]);

    return (
        <>
        <Card>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                {postList.length > 0
                    ?
                        postList?.map((list, idx) => <PostItem key={idx} id={idx} post={list} setPostList={setPostList} setIsToast={setIsToast} />)
                    :
                        (
                            <Flex minWidth='max-content' alignItems='center' justifyContent='center' gap='2'>
                                <Box>
                                    <Heading size='xs'>
                                        등록된 포스트가 없습니다.
                                    </Heading>
                                </Box>
                            </Flex>      
                        )
                }
                
                </Stack>
            </CardBody>
        </Card>
        <PostInput setPostList={setPostList} setIsToast={setIsToast} />
        </>
    );
};

export default PostContainer;