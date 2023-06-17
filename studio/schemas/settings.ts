import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'ga4MeasurementId',
            title: 'GA4 Measurement ID',
            type: 'string',
        }),
    ],
})