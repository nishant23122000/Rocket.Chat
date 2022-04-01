import { Modal, Box, Field, FieldGroup, TextInput, ButtonGroup, Button, TextAreaInput } from '@rocket.chat/fuselage';
import { useAutoFocus, useMutableCallback } from '@rocket.chat/fuselage-hooks';
import React, { ReactElement, memo } from 'react';
import { Message } from '@rocket.chat/fuselage';
import UserAvatar from '../../../../components/avatar/UserAvatar';
import { useToastMessageDispatch } from '../../../../contexts/ToastMessagesContext';
import { useTranslation } from '../../../../contexts/TranslationContext';
import { formatTime } from '../../../../lib/utils/formatTime';
import { useForm } from '../../../../hooks/useForm';
import UserAutoCompleteMultiple from '/client/components/UserAutoCompleteMultiple';
type ShareMessageProps = {
	onClose: () => void;
	onSubmit: (name: string, description?: string) => void;
	message: string;
	username: string;
	time: Date;
	invalidContentType: boolean;
};

const ShareMessageModal = ({ onClose, message, username, time, onSubmit, invalidContentType }: ShareMessageProps): ReactElement => {
	// const [name, setName] = useState<string>(fileName);
	// const [description, setDescription] = useState<string>(fileDescription || '');
	const t = useTranslation();
	const { values, handlers } = useForm({
		description: 'fj',
		usernames: [],
	});

	const { description, usernames } = values;
	const { handleDescription, handleUsernames } = handlers;
	const dispatchToastMessage = useToastMessageDispatch();

	const ref = useAutoFocus<HTMLInputElement>();
	const onChangeUsers = useMutableCallback((value, action) => {});
	const shareMessage = (e: any) => {
		e.preventDefault();
		console.log(values);
	};
	return (
		<Modal>
			<Box is='form' display='flex' flexDirection='column' height='100%' onSubmit={() => {}}>
				<Modal.Header>
					<Modal.Title>{t('Share_Message_Title')}</Modal.Title>
					<Modal.Close onClick={onClose} />
				</Modal.Header>
				<Modal.Content overflow='hidden'>
					<FieldGroup>
						<Field>
							<Field.Label>{t('Person_Or_Channel')}</Field.Label>

							<Field.Row>
								<UserAutoCompleteMultiple onChange={onChangeUsers} value={usernames} />
							</Field.Row>
							{/* {!name && <Field.Error>{t('error-the-field-is-required', { field: t('Name') })}</Field.Error>} */}
						</Field>
						<Field>
							<Field.Label>{t('Add_Message')}</Field.Label>
							<Field.Row>
								<TextAreaInput onChange={handleDescription} rows={5} />
							</Field.Row>
							{/* {!name && <Field.Error>{t('error-the-field-is-required', { field: t('Name') })}</Field.Error>} */}
						</Field>
						<Field>
							<Box>
								<Message className='customclass' clickable>
									<Message.LeftContainer>
										<UserAvatar username={username} size='x20' />
									</Message.LeftContainer>
									<Message.Container>
										<Message.Header>
											<Message.Name>{username}</Message.Name>
											{/* <Message.Username>@haylie.george</Message.Username>
											<Message.Role>Admin</Message.Role>
											<Message.Role>User</Message.Role>
											<Message.Role>Owner</Message.Role> */}
											<Message.Timestamp>{formatTime(time)}</Message.Timestamp>
										</Message.Header>
										<Message.Body style={{ wordBreak: 'break-word' }}>{message}</Message.Body>
									</Message.Container>
								</Message>
							</Box>
						</Field>
					</FieldGroup>
				</Modal.Content>
				<Modal.Footer>
					<ButtonGroup align='end'>
						<Button ghost onClick={() => {}}>
							{t('Copy_Link')}
						</Button>
						<Button onClick={shareMessage} primary type='submit'>
							{t('Share_message')}
						</Button>
					</ButtonGroup>
				</Modal.Footer>
			</Box>
		</Modal>
	);
};

export default memo(ShareMessageModal);
