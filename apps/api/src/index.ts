import { ability } from "@saas/auth";

const UserCanInviteSomeoneElse = ability.can('invite', 'User')
const UserCanDeleteOtherUsers = ability.can('delete', 'User')
const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')


console.log(UserCanInviteSomeoneElse, UserCanDeleteOtherUsers, userCannotDeleteOtherUsers)