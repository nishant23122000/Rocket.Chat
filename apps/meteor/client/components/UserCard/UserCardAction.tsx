import { IconButton, Icon } from '@rocket.chat/fuselage';
import React, { ReactElement, ComponentProps } from 'react';

type UserCardActionProps = {
	label?: string;
	icon: ComponentProps<typeof Icon>['name'];
};

const UserCardAction = ({ label, icon, ...props }: UserCardActionProps): ReactElement => (
	<IconButton icon={icon} small title={label} {...props} mi='x2' />
);

export default UserCardAction;
