<template>
    <div class="chat container">
        <h2 class="center teal-text">Vue Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages">
                    <li>
                        <span class="teal-text">Name</span>
                        <span class="grey-text text-darken-3">message</span>
                        <span class="grey-text time">time</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name"/>
            </div>
        </div>
    </div>
</template>

<script>
    import NewMessage from '@/components/NewMessage';
    import db from '@/firebase/init';

    export default {
        name: 'Chat',
        props: ['name'],
        components: {
            NewMessage
        },
        data() {
            return {

            };
        },
        created() {
            // Getting the collection of messages from the database
            let ref = db.collection('messages');
            // We are then getting the snapshot changes to the messages
            ref.onSnapshot(snapshot => {
                console.log('Snapshot changes: ', snapshot.docChanges());
            });
        }
    }
</script>

<style>
    .chat h2 {
        font-size: 2.6em;
        margin-bottom: 40px;
    }
    .chat span {
        font-size: 1.4em;
    }
    .chat .time {
        display: block;
        font-size: 1.2em;
    }
</style>

