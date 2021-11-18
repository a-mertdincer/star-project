import React from 'react'
import { Button, Input,TextArea } from 'semantic-ui-react'




export default function AddNew({addnew}) {
    return (
        <div>
            <h1>Yeni Blog Ekleme</h1>
        <p><TextArea placeholder='Sihirli parmaklar...' style={{ minHeight: 100 }}/></p>
        <Button secondary>Kaydet</Button>
        </div>
    )
}
