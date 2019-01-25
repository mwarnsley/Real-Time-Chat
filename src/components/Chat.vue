<template>
    <div class="chat container">
        <h2 class="center teal-text">Vue Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{ message.name }}</span>
                        <span class="grey-text text-darken-3">{{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp | timestamp }}</span>
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
                messages: []
            };
        },
        created() {
            // Getting the collection of messages from the database
            let ref = db.collection('messages').orderBy('timestamp');
            // We are then getting the snapshot changes to the messages
            ref.onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        const doc = change.doc;
                        this.messages.push({
                            id: doc.id,
                            name: doc.data().name,
                            content: doc.data().content,
                            timestamp: doc.data().timestamp
                        });
                    }
                });
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
        font-size: 0.8em;
    }
    .messages {
        max-height: 300px;
        overflow: auto;
    }
    .messages::webkit-scrollbar {
        width: 3px;
    }
    .messages::webkit-scrollbar-track {
        background: #ddd;
    }
    .messages::webkit-scrollbar-thumb {
        background: #ddd;
    }
</style>

