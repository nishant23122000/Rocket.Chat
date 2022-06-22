import { escapeRegExp } from '@rocket.chat/string-helpers';
import { ILivechatDepartmentRecord, IUser } from '@rocket.chat/core-typings';
import { FilterQuery } from 'mongodb';

import { Users } from '../../../models/server/raw';
import { hasPermissionAsync } from '../../../authorization/server/functions/hasPermission';

export async function findUsersToAutocomplete({
	uid,
	selector,
}: {
	uid: string;
	selector: {
		exceptions: string[];
		conditions: FilterQuery<ILivechatDepartmentRecord>;
		term: string;
	};
}): Promise<{
	items: Required<Pick<IUser, '_id' | 'name' | 'username' | 'nickname' | 'status' | 'avatarETag'>>[];
}> {
	if (!(await hasPermissionAsync(uid, 'view-outside-room'))) {
		return { items: [] };
	}
	const exceptions = selector.exceptions || [];
	const conditions = selector.conditions || {};
	const options = {
		projection: {
			name: 1,
			username: 1,
			nickname: 1,
			status: 1,
			avatarETag: 1,
		},
		sort: {
			username: 1,
		},
		limit: 10,
	};

	const users = await Users.findActiveByUsernameOrNameRegexWithExceptionsAndConditions(
		new RegExp(escapeRegExp(selector.term), 'i'),
		exceptions,
		conditions,
		options,
	).toArray();

	return {
		items: users,
	};
}

/**
 * Returns a new query object with the inclusive fields only
 * @param {Object} query search query for matching rows
 */
export function getInclusiveFields(query: { [k: string]: 1 }): {} {
	const newQuery = Object.create(null);

	for (const [key, value] of Object.entries(query)) {
		if (value === 1) {
			newQuery[key] = value;
		}
	}

	return newQuery;
}

/**
 * get the default fields if **fields** are empty (`{}`) or `undefined`/`null`
 * @param {Object|null|undefined} fields the fields from parsed jsonQuery
 */
export function getNonEmptyFields(fields: { [k: string]: 1 | 0 }): { [k: string]: 1 } {
	const defaultFields = {
		name: 1,
		username: 1,
		emails: 1,
		roles: 1,
		status: 1,
		active: 1,
		avatarETag: 1,
		lastLogin: 1,
	} as const;

	if (!fields || Object.keys(fields).length === 0) {
		return defaultFields;
	}

	return { ...defaultFields, ...fields };
}

const _defaultQuery = {
	$or: [
		{ 'emails.address': { $regex: '', $options: 'i' } },
		{ username: { $regex: '', $options: 'i' } },
		{ name: { $regex: '', $options: 'i' } },
	],
};

/**
 * get the default query if **query** is empty (`{}`) or `undefined`/`null`
 * @param {Object|null|undefined} query the query from parsed jsonQuery
 */

type Query = { [k: string]: unknown };
export function getNonEmptyQuery(query: Query): typeof _defaultQuery | (typeof _defaultQuery & Query) {
	const defaultQuery = {
		$or: [
			{ 'emails.address': { $regex: '', $options: 'i' } },
			{ username: { $regex: '', $options: 'i' } },
			{ name: { $regex: '', $options: 'i' } },
		],
	};

	if (!query || Object.keys(query).length === 0) {
		return defaultQuery;
	}

	return { ...defaultQuery, ...query };
}
