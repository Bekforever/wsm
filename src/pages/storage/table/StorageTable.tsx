import { FC } from 'react'
import { UiButton } from '@/components'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaDeleteLeft } from 'react-icons/fa6'
import { UiPopconfirm } from '@/components/popConfirm/UiPopconfirm'
import styles from './StorageTable.module.scss'
import type { ColumnsType } from 'antd/es/table'
import { useTranslation } from 'react-i18next'
import { UiTable } from '@/components/table/UiTable'

const StorageTable: FC = () => {
	const { t } = useTranslation()
	const handleDelete = () => {
		console.log('deleted')
	}
	const columns: ColumnsType<any> = [
		{
			title: t('storageTableCol1'),
			dataIndex: 'name',
		},
		{
			title: t('storageTableCol2'),
			dataIndex: 'name',
		},
		{
			title: t('storageTableCol3'),
			dataIndex: 'name',
		},
		{
			title: t('storageTableCol4'),
			dataIndex: 'price',
		},
		{
			title: t('storageTableCol5'),
			dataIndex: 'quantity',
		},
		{
			title: t('storageTableCol6'),
			dataIndex: 'name',
		},
		{
			title: t('actions'),
			dataIndex: 'actions',
			render: () => (
				<div className={styles.actions}>
					<UiButton>
						<AiOutlineEdit size='22' />
						{t('edit')}
					</UiButton>
					<UiPopconfirm title={t('beforeDelete')} onConfirm={handleDelete}>
						<UiButton style={{ background: 'red' }}>
							<FaDeleteLeft size='22' />
							{t('delete')}
							{/* <Delete route='courses' id={rec.id} /> */}
						</UiButton>
					</UiPopconfirm>
				</div>
			),
		},
	]

	return (
		<UiTable
			columns={columns}
			dataSource={[{}]}
			pagination={{
				total: 10,
				current: 1,
				showSizeChanger: false,
				defaultPageSize: 10,
				// onChange: e => setPage(e),
			}}
			rowKey={e => e.id}
		/>
	)
}

export { StorageTable }
