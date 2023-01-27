import { Button, Input, Stack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const PostInput = ({setPostList, setIsToast}) => {
    const [addPost, setAddPost] = useState({
        title: '',
        contents:''
    })
    const handleChange = (e) => {
        const { id, value } = e.target;
        setAddPost({ ...addPost, [id]: value });
    }
    const handleAddPost = () => {
        if (addPost.title !== '' || addPost.contents !== '') {
            setPostList(prev => ([...prev, {...addPost}]));
            setIsToast({message: '포스트가 등록되었습니다.', isActive: true});
        }
    }
    return (
        <Stack spacing={3} mt={10}>
            <Input id='title' onChange={handleChange} variant='outline' placeholder='제목' />
            <Input id='contents' onChange={handleChange} variant='outline' placeholder='내용' />
            <Button variant='solid' onClick={handleAddPost}>등록</Button>
        </Stack>
    );
};

export default PostInput;