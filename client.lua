function TopXNotify(type, title, message, time, postion, sound)
	SendNUIMessage({
		action = 'notify',
		type = type,
		title = title,
		message = message,
		time = time,
		postion = postion,
		sound = sound,
	})
end

RegisterNetEvent('TopXNotifyV2:Notify')
AddEventHandler('TopXNotifyV2:Notify', function(type, title, message, time, postion, sound)
	TopXNotify(type, title, message, time, postion, sound)
end)