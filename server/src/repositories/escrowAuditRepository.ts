import * as mongoose from 'mongoose';

let EscrowAudit = mongoose.model('EscrowAudit');

export default {
    createEscrowAudit
};

async function createEscrowAudit(event, user) {
    let audit = new EscrowAudit({
        event: event,
        username: user.displayName,
        userId : user._id.toString()
    });

    return await audit.save();
}